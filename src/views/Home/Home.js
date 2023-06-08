/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import loadingSVG from "../../assets/loading.svg";
import PopularMovieList from "../../components/PopularMovieList/PopularMovieList";
import {
	useLoadingMoviesSelector,
	useMoviesSelector,
} from "../../config/redux/Movies/moviesSelector";
import {
	getMovieList,
	searchMovie,
} from "../../config/redux/Movies/moviesThunk";

function Home() {
	const [search, setSearch] = useState("");
	// selector untuk mengambil state data dari redux
	const movies = useMoviesSelector();
	const loading = useLoadingMoviesSelector();
	// dispatch untuk memanggil action dari redux. Paham kalau sudah tahu lifecycle dari redux.
	const dispatch = useDispatch();
	// useEffect untuk mengecek apakah search ada atau tidak, jika tidak ada maka akan menjalankan fungsi getMovieList, jika ada maka akan menjalankan fungsi searchMovie
	useEffect(() => {
		if (search.length > 2) {
			dispatch(searchMovie(search));
		}
		if (search.length === 0) {
			dispatch(getMovieList());
		}
	}, [search]);
	return (
		<div className="App">
			<header className="App-header">
				<nav className="navbar navbar-transparent">
					<div className="container">
						<div className="navbar-header">
							<h1>
								<a className="navbar-brand text-danger" href="/">
									Movielist
								</a>
							</h1>
						</div>

						<div className="navbar-form navbar-center">
							<div className="form-group">
								<input
									placeholder="cari film"
									className="form-control"
									onChange={(e) => setSearch(e.target.value)}
								/>
							</div>
						</div>
						<ul className="nav navbar-nav ml-auto">
							<li className="nav-item">
								<button className="btn btn-danger mr-3 ">Register</button>
								<button className="btn btn-outline-danger ml-3">Login</button>
							</li>
						
						</ul>
					</div>
					
				</nav>
				{/* kondisi dimana jika loading maka akan menampilkan svg loading, jika tidak loading maka akan menampilkan list data */}
				{loading ? (
					<div>
						<img src={loadingSVG} alt="" />
					</div>
				) : (
					<PopularMovieList popularMovies={movies} />
				)}
			</header>
		</div>
	);
}

export default Home;
