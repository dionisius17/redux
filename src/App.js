import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "./config/redux/store";
import Home from "./views/Home/Home";
import "./App.css";

const App = () => {
	return (
		// provider merupakan komponen bawaan redux, dia menerima props store yang berisi config store yang berada di folder config
		// persistGate merupakan komponen dari redux jika menggunakan redux persist, redux persist berfungsi agar menyimpan state dan tidak dapat hilang walau tabnya diclose. state akan hilang jika dihapus manual di local storage dan saat data browser dihapus
		<Provider store={store}>
			<PersistGate loading={null} persistor={persiststore}>
				<Home />
			</PersistGate>
		</Provider>
	);
};

export default App;
