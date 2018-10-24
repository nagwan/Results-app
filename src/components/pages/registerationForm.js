import React, { Component } from 'react';
import Registeration from '../forms/registeration';
import { connect } from "react-redux";
import propTypes from 'prop-types';
import { addNewUser, setTheLoggedInUser } from "../../actions/actionCreators";

var _ = require('lodash');

class Register extends Component {

	isUserExists = data => {

		const { users } = this.props;

		let emailUsed = _.find(users, user => {

			return user.email === data.email

		})

		return emailUsed;

	}


	submitRegister = (data) => {

		this.props.addNewUser(data);
		this.props.setTheLoggedInUser(data)

		this.props.history.push("/profile/personal-info");
	}


	render() {
		return (
			<div className="container-fluid mainInterface">
				<div className="row justify-content-center">
					<div className="col-xs-10">
						<div className="formBox">

							<Registeration isUserExists={this.isUserExists} submit={this.submitRegister} />

						</div>
					</div>
				</div>
			</div>
		);
	}
}

Register.propTypes = {

	users: propTypes.arrayOf(
		propTypes.shape({
			email: propTypes.string.isRequired,
		}).isRequired
	),

	history: propTypes.shape({
		push: propTypes.func.isRequired
	}).isRequired
}


const mapStateToProps = state => {
	return {

		users: state.users

	}
}

const mapDispatchToProps = dispatch => {

	return {

		addNewUser: (newUser) => dispatch(addNewUser(newUser)),
		setTheLoggedInUser: (loggedUser) => dispatch(setTheLoggedInUser(loggedUser)),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);

