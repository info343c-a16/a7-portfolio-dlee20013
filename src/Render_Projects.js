import React from 'react';

var Render_Projects = React.createClass({
    render() {
        return(
            <div className="eachProject">
                <a target="_blank" href={this.props.url}>- {this.props.name}</a>
                <blockquote><em>{this.props.description}</em></blockquote>
                <p>{this.props.pdate}</p>
            </div>
        )
    }
});

export default Render_Projects;
