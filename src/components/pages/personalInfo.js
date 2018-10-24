import React, { Component } from 'react';
import { connect } from "react-redux";
import propTypes from 'prop-types';


class PersonalInfo extends Component {

    render() {
        return (

            <div className="container userInfoBox">
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <span className="text-center">
                            <h1>
                                {this.props.loggedInUser.firstName} {this.props.loggedInUser.lastName}
                            </h1>
                        </span>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <span className="text-center">
                            <h1>
                                {this.props.loggedInUser.email}
                            </h1>
                        </span>
                    </div>
                </div>



            </div>
        );
    }
}



const mapStateToProps = state => {
    return {

        loggedInUser: state.loggedInUser

    }
}

PersonalInfo.propTypes = {

    loggedInUser: propTypes.object.isRequired

}


export default connect(mapStateToProps)(PersonalInfo);