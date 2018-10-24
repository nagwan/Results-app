import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import propTypes from 'prop-types';

class Nav extends Component {
	render() {
		return (
			<div className="">
				<nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<Link className="navbar-brand" to='/' onClick={this.props.logUserOut()}>Log out</Link>

					<div className="collapse navbar-collapse" id="nav-content">
						<ul className="navbar-nav">

							<li className="nav-item">
								<Link className="nav-link" to='/profile/personal-info'>Profile</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to='/profile/results'>My Results</Link>
							</li>

						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

Nav.propTypes = {

	logUserOut: propTypes.func.isRequired

}

export default Nav;
