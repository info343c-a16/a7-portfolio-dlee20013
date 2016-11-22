//first page user sees when loading

import React from 'react';
import './css/About_Me.css';

var About_Me = React.createClass({
	render() {
		return(
			<div className="about">
				<p>My name is Davin Lee.  I am a first year student in the Informatics Program at UW.  I have an interest in CyberSecurity.</p>
			</div>
		)
	}
});

export default About_Me;
