import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AppInterface extends Component {

    render() {
        return (
            <div className="container-fluid mainInterface">
                <div className="appIntro">
                    <div className="col-xs-8 text-center">
                        <h1 className="heading">Results Come To Those Who Wait</h1>
                        <h3>Create Your Account Now</h3>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xs-8 d-flex">
                        <div className="col-xs-6">
                            <button type="button" className="btn btn-outline-light">
                                <Link to="/login">Log in</Link>
                            </button>
                        </div>

                        <div className="col-xs-6 signUpBtn">
                            <button type="button" className="btn btn-success">
                                <Link to="/sign-up">Create Account</Link>
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default AppInterface;