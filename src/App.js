//This is the main application

import React from 'react';
import './css/App.css';
import { Link } from 'react-router';

var App = React.createClass({
	render() {
		return (
			<div className="App">
				<div className="navigation">
					<Link className="link" activeClassName='active' to="/">Why Me?</Link>
					<Link className="link" activeClassName='active' to="/About_Me">About Me</Link>
					<Link className="link" activeClassName='active' to="/Projects">My Projects</Link>
				</div>
				<div className="children">
					{this.props.children}
				</div>
			</div>
		)
	}
});

export default App;
