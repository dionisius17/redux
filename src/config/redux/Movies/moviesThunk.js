import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;


//  fungsi untuk mengambil data dari api. Ini menggunakan axios dan redux untuk menghandle promise.
// redux thunk
export const getMovieList = createAsyncThunk("user/getMovieList", async () => {
	const movie = await axios.get(
		`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`

	);
	return movie.data.results;
});

export const searchMovie = createAsyncThunk(
	"user/searchMovie",
	async (param) => {
		const search = await axios.get(
			`${baseUrl}/search/movie?query=${param}&page=1&api_key=${apiKey}`
		);
		return search.data.results;
	}
);
