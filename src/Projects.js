import React from 'react';
import './css/Projects.css';
import Render_Projects from './Render_Projects.js';
import Baby from 'babyparse';
import $ from 'jquery';

    var Projects = React.createClass({
      get initialState(){
        return {projects:[]}
      },

      componentDidMount(){
        $.get('data/portfolio_a7_data.csv').then(function(data) {
          var parsedData = Baby.parse(data, {header:true});
          this.setState({projects:parsedData.data})
          console.log(parsedData.data);
        }.bind(this));
      },

      render() {
        if (this.state != null) {
        return (
          <div className='project_info'>
            <div>
              {this.state.projects.map(function(proj, i){
                return (<Render_Projects key={'Project -' + i}
                  name={proj.name}
                  url={proj.url}
                  description={proj.description}
                  pdate={proj.pdate}
                />)
              })}
            </div>
          </div>
        );
      }
      return <div></div>
      }
    });

export default Projects;
