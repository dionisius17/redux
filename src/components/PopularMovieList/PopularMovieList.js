import React from "react";

//komp onenstateless agar tidak ada logic yang dibuat di dalamnya dan hanya menerima props saja
const PopularMovieList = ({ popularMovies }) => {
	return (
		<div className="Movie-container">
			{popularMovies &&
				popularMovies.map((movie, i) => {
					return (
						<div className="Movie-wrapper" key={i}>
							<div className="Movie-title">{movie.title}</div>
							<img
								className="Movie-image"
								src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
								alt={movie.title}
							/>
							<div className="Movie-data">Release : {movie.release_date}</div>
							<div className="Movie-rate">
								Rating : <span className="rating-text">{movie.vote_average}</span>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default PopularMovieList;
