import React from 'react';

var Render_Projects = React.createClass({
    render() {
      console.log(this.props.img);
        return(
            <div className="eachProject">
                <a className="eachAssignment" target="_blank" href={this.props.url}>{this.props.name}</a>
                <blockquote><em>{this.props.description}</em></blockquote>
                <p className="date">Content Published: {this.props.pdate}</p>
            </div>
        )
    }
});

export default Render_Projects;
