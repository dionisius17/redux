import { combineReducers } from "redux";
import { moviesReducer } from "./Movies/moviesSlice";

// tempat reducer. biasanya disini jika ingin menambah reducer baru, kita tinggal menambahkannya di dalamnya combineReducers.
const reducer = combineReducers({
	movies: moviesReducer,
	// ditambah disi dan seterusnya
});

export default reducer;
