import React, { Component } from 'react';

import Img from '../../img/project.jpg';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2 className="title">Projects</h2>

        <div className="projects-wrapper">
          <div className="project">
            <div className="project-info">
                Project Info
            </div>

            <img src={Img} alt=""/>
          </div>
          
          <div className="project">
            <div className="project-info">
                Project Info
            </div>

            <img src={Img} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
