import React, { Component } from 'react';
import propTypes from 'prop-types';
import Nav from "./nav";
import Results from "./results";
import PersonalInfo from "./personalInfo";
import { Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { logUserOut } from "../../actions/actionCreators";


class profile extends Component {

    logOut = () => {

        return this.props.logUserOut;

    }

    render() {
        return (
            <div className="">

                <Nav logUserOut={this.logOut} />

                <div className="profileContainer">
                    <Switch>

                        <Route path="/profile/personal-info" component={PersonalInfo} exact />

                        <Route path="/profile/results" component={Results} />

                    </Switch>




                </div>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {

    return {

        logUserOut: () => dispatch(logUserOut())
    }
}

profile.propTypes = {
    logUserOut: propTypes.func.isRequired
}



export default connect(null, mapDispatchToProps)(profile);