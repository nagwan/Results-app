import React, { Component } from 'react';
import { connect } from "react-redux";
import propTypes from 'prop-types';


class Results extends Component {

    render() {
        return (
            <div className="container resultsBox">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>SUBJECT</th>
                            <th>MARK</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.props.loggedInUser.results).map((subject, index) => {

                            return (
                                <tr key={index}>
                                    <td>{subject}</td>
                                    <td>{this.props.loggedInUser.results[subject]}</td>
                                </tr>
                            )

                        })}
                    </tbody>
                </table>

            </div>

        );
    }
}

const mapStateToProps = state => {
    return {

        loggedInUser: state.loggedInUser

    }
}

Results.propTypes = {

    loggedInUser: propTypes.object.isRequired

}

export default connect(mapStateToProps)(Results);