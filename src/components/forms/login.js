import React, { Component } from 'react';
import propTypes from 'prop-types';


class Login extends Component {
	constructor(props) {

		super(props);

		this.initialState = {

			loginDate: {
				email: "",
				password: ""
			},

			errors: {}
		};

		this.state = this.initialState;

		this.state = this.initialState;
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.validate = this.validate.bind(this);

	}

	handleChange(event) {

		const { name, value } = event.target;

		const { loginDate } = this.state;

			this.setState({
				loginDate : { ...loginDate, [name]: value }
			});

	}

	handleSubmit(event) {

		const { loginDate } = this.state;

		const errors = this.validate(loginDate);

		this.setState({ errors });

		if (Object.keys(errors).length === 0) {

			this.props.submit(loginDate);

			this.setState(this.initialState);
		}

		event.preventDefault();

	}

	validate(data) {

		const errors = {};

		if (!data.email) {
			errors.email = 'this field cannot be empty'

		} else if (!data.password) {
			errors.password = 'this field cannot be empty'

		} else if (data.password.length <= 5) {
			errors.password = 'your password must be 6 chars length at least'

		} else if(!this.props.isUserAuthenticated(data)){
			errors.credentialsErrors = "these credentials doesn`t match our records";

		}

		return errors;
	}

	render() {
		const { loginDate, errors } = this.state;

		return (
			<form method="post" onSubmit={this.handleSubmit}>
				<div className='row justify-content-center'>
					<div className="col-sm-8">
						<label>E-mail</label>
						<input 	className='form-control form-control-lg' 
								type='email'
								name='email'
								placeholder='example@zwaar.com'
								value={loginDate.email}
								onChange={this.handleChange} />
					</div>
					{errors.email && <span className="text-danger text-center">{errors.email}</span>}
				</div>

				<div className="row justify-content-center passwordInput">
					<div className="col-sm-8">
						<label className="">Password</label>
						<input 	className='form-control form-control-lg' 
								type='password'
								name='password'
								placeholder='keep it secret'
								value={loginDate.password}
								onChange={this.handleChange} />
					</div>
					{errors.password && <span className="text-danger text-center">{errors.password}</span>}
				</div>

				<div className="row justify-content-center loginBtn">
					<div className="col-sm-3">
						<button className='btn btn-outline btn-lg btn-block' type="submit">Log In</button>
					</div>
				</div>
				
				<div className="row justify-content-center">
					<div className="col-sm-8">
						{errors.credentialsErrors && <span className="text-danger text-center">{errors.credentialsErrors}</span>}
					</div>
				</div>
				
			</form>
		);
	}
}

Login.propTypes = {

	submit : propTypes.func.isRequired,
	isUserAuthenticated : propTypes.func.isRequired,

}

export default Login;