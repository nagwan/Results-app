import React, { Component } from 'react';
import './App.css';
import AppInterface from './components/pages/appInterface'
import LognIn from "./components/pages/loginForm";
import SignUp from "./components/pages/registerationForm";
import Profile from "./components/pages/profile";
import { Switch, Route } from 'react-router-dom';


class App extends Component {

	render() {
		return (
			<div className="">

				<Switch>
					<Route path="/" component={AppInterface} exact/>
					<Route path="/login" component={LognIn}/>
					<Route path="/sign-up" component={SignUp}/>
					<Route path="/profile" component={Profile}/>
				</Switch>

			</div>
		);
	}
}

export default App;

