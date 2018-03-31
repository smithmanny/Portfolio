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
            <img className="project-img" src={Img} alt="" />

            <div className="project-info">
              <h2>Project Info</h2>
              <button className="btn">View More</button>
              <h5>Web Design / Web Development</h5>
            </div>
          </div>

          <div className="project">
            <img className="project-img" src={Img} alt="" />

            <div className="project-info">
              <h2>Project Info</h2>
              <button className="btn">View More</button>
              <h5>Web Design / Web Development</h5>
            </div>
          </div>
        </div>
        
        <div className="all-projects">
            <button className="btn">View All</button>
        </div>
      </div>
    );
  }
}

export default Projects;
