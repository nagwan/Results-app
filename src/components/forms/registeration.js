import React, { Component } from 'react';
import propTypes from 'prop-types';


class Registeration extends Component {

    constructor(props) {
        super(props);

        this.initialState = {

            newAccountData: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                retypePassword: "", 
                results : {
                    Arabic : Math.floor(Math.random() * 100),
                    English : Math.floor(Math.random() * 100), 
                    Science : Math.floor(Math.random() * 100),
                    History : Math.floor(Math.random() * 100),
                    Design : Math.floor(Math.random() * 100),
                    Art : Math.floor(Math.random() * 100) ,
                    Physics : Math.floor(Math.random() * 100),
                    Geometry : Math.floor(Math.random() * 100),
                    Chemistry : Math.floor(Math.random() * 100),
                },
            },

            errors: {}

        };

        this.state = this.initialState

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
        this.dataValidation = this.dataValidation.bind(this);

    }

    handleChange(event) {

        const { name, value } = event.target;

        const { newAccountData } = this.state;

        this.setState({

            newAccountData: { ...newAccountData, [name]: value }

        });

    }

    handleSubmission(event) {

        const { newAccountData } = this.state;

        const errors = this.dataValidation(newAccountData);

        this.setState({ errors })

        if (Object.keys(errors).length === 0) {

            this.props.submit(newAccountData)

            this.setState(this.initialState)
        }

        event.preventDefault();
    }

    dataValidation(data) {

        const errors = {}

        if (!data.firstName) {
            errors.firstName = "this field cannot be empty"

        } else if (!data.lastName) {
            errors.lastName = "this field cannot be empty"

        } else if (!data.email) {
            errors.email = "this field cannot be empty"

        }else if(this.props.isUserExists(data)){
            errors.email = "this email is already used"
         }
        
        else if (!data.password) {
            errors.password = "this field cannot be empty"

        } else if (data.password.length <= 5) {
            errors.password = 'your password must be 6 chars length at least'

        } else if (data.password !== data.retypePassword) {
            errors.retypePassword = "the password fields do not match, try again"
        }

        return errors;

    }

    render() {
        const { newAccountData, errors } = this.state

        return (
            <form method="post" onSubmit={this.handleSubmission}>
                <div className='row justify-content-center'>
                    <div className="col-sm-6">
                        <label>First Name</label>
                        <input className='form-control form-control-lg'
                            type="text"
                            name="firstName"
                            onChange={this.handleChange}
                            value={newAccountData.firstName} />
                    </div>


                    <div className="col-sm-6">
                        <label>Last Name</label>
                        <input className='form-control form-control-lg'
                            type="text"
                            name="lastName"
                            onChange={this.handleChange}
                            value={newAccountData.lastName} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        {errors.firstName && <span className="text-danger">{errors.firstName}</span>}
                    </div>
                    <div className="col-sm-6">
                        {errors.lastName && <span className="text-danger">{errors.lastName}</span>}
                    </div>
                </div>

                <div className="row justify-content-center passwordInput">
                    <div className="col-sm-12">
                        <label className="">Email</label>
                        <input className='form-control form-control-lg'
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            value={newAccountData.email} />
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-12">
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>

                </div>

                <div className='row justify-content-center passwordInput'>
                    <div className="col-sm-6">
                        <label>Password</label>
                        <input className='form-control form-control-lg'
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={newAccountData.password} />
                    </div>

                    <div className="col-sm-6">
                        <label>retype password</label>
                        <input className='form-control form-control-lg'
                            type="password"
                            name="retypePassword"
                            value={newAccountData.retypePassword}
                            onChange={this.handleChange} />
                    </div>
                </div>


                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <div className="col-sm-6">
                        {errors.retypePassword && <span className="text-danger">{errors.retypePassword}</span>}
                    </div>
                </div>

                <div className="row justify-content-center loginBtn">
                    <div className="col-sm-4">
                        <button className='btn btn-outline-success btn-lg btn-block' type="submit">Sign up</button>
                    </div>
                </div>

            </form>
        );
    }
}

Registeration.propTypes = {

    submit: propTypes.func.isRequired,
    isUserExists : propTypes.func.isRequired
}

export default Registeration;