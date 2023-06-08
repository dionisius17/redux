import { createSlice } from "@reduxjs/toolkit";
import { getMovieList, searchMovie } from "./moviesThunk";

// initial state yang berisi movies dan loading
export const initialState = {
	movies: [],
	loading: false,
};
// pembuatan slice, namanya adalah movies. jika kita ingin mengakses state diatasnya, kita harus menggunakan nama slicenya dulu. contohnya state.movies.loading. movies mengacu dibawah ini, sedangkan loading mengacu pada state diatasnya. Bisa dilihat di file moviesSelector.js

// seperti yang ada di selector, 
const moviesSlice = createSlice({
	name: "movies",
	initialState: initialState,
	reducers: {},
	
	// Extra reducers ini bawaannya mempunyai 3 kondisi, kondisi dimana dia pending, fulfilled, dan rejected. Jadi kita bisa menghadle saat loading, berhasil dan error.
	// isi dari addcase merupakan function dari moviesThunk
	extraReducers: (builder) => {
		builder
			.addCase(getMovieList.pending, (state, action) => {
				return {
					...state,
					loading: true,
				};
			})
			.addCase(getMovieList.fulfilled, (state, action) => {
				return {
					...state,
					movies: action.payload,
					loading: false,
				};
			})
			.addCase(getMovieList.rejected, (state, action) => {
				return {
					...state,
					loading: false,
				};
			})
			.addCase(searchMovie.pending, (state, action) => {
				return {
					...state,
					loading: true,
				};
			})
			.addCase(searchMovie.fulfilled, (state, action) => {
				return {
					...state,
					movies: action.payload,
					loading: false,
				};
			})
			.addCase(searchMovie.rejected, (state, action) => {
				return {
					...state,
					loading: false,
				};
			});
	},
});

// saat export kita mengeksport 2 yaitu actions dan reducer. disini saya mengganti namanya moviesAction dan moviesReducer
export const { actions: moviesAction, reducer: moviesReducer } = moviesSlice;
