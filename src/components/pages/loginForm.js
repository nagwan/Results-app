import React, { Component } from 'react';
import Login from '../forms/login';
import { connect } from "react-redux";
import propTypes from 'prop-types';
import { setTheLoggedInUser } from "../../actions/actionCreators";


var _ = require('lodash'); 

class login extends Component {

	constructor(props) {

		super(props);

		this.state = {};
	}

	isUserAuthenticated = (data) => {

		const { users } = this.props;

		let userData = _.find(users, user => {

			return user.email === data.email && user.password === data.password;

		});

		return userData;
	}



	submitLogin = (data) => {

		let user = this.isUserAuthenticated(data);

		if (user) {

			this.props.setTheLoggedInUser(user)

			this.props.history.push("/profile/personal-info")

		}
	}

	render() {
		return (
			<div className="container-fluid mainInterface">
				<div className="row justify-content-center">
					<div className="col-xs-10">
						<div className="formBox">

							<Login submit={this.submitLogin} isUserAuthenticated={this.isUserAuthenticated} />

						</div>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {

		users: state.users

	}
}

const mapDispatchToProps = dispatch => {

	return {

		setTheLoggedInUser: (loggedUser) => dispatch(setTheLoggedInUser(loggedUser)),
	}
}

login.propTypes = {
	users: propTypes.arrayOf(
		propTypes.shape({
			email: propTypes.string.isRequired,
			password: propTypes.string.isRequired,
			firstName: propTypes.string.isRequired,
			lastName: propTypes.string.isRequired
		}).isRequired
	),

	history: propTypes.shape({
		push: propTypes.func.isRequired
	}).isRequired,


}

export default connect(mapStateToProps, mapDispatchToProps)(login);