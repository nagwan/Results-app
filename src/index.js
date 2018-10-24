
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from './App';
import store from "./store/index";

render(

	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,

	document.getElementById('root')
);

window.store = store





