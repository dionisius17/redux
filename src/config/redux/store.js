import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

// pengaturan redux utama

const persistConfig = {
	// key untuk nama di local storagenya
	key: "root",
	storage,
};

// redux-persist
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunkMiddleware],
});

// export untuk digunakan di app.js
export const persiststore = persistStore(store);

export default store;
