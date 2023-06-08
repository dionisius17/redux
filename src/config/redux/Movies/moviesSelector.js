import { useSelector } from "react-redux";

// selector untuk mengambil data dari state redux movies dan loading
export const useMoviesSelector = () =>
	useSelector((state) => state.movies.movies);
export const useLoadingMoviesSelector = () =>
	useSelector((state) => state.movies.loading);
