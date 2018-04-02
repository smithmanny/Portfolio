import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
// Assets
import './Projects.css';

const Projects = ({ data: { loading, allProjects } }) => {
  if (!loading) {
    return (
      <div className="wrapper">
        <h2 className="title">Projects</h2>

        <div className="projects-wrapper">
          {allProjects.map(project => (
            <div className="project" key={project.id}>
              <img
                className="project-img"
                src={project.image.url}
                alt={project.name}
              />

              <div className="project-info">
                <h3>{project.name}</h3>
                <button className="btn">
                  <a href={project.link} rel="noopener noreferrer">
                    View Project
                  </a>
                </button>
                <h4>{project.type}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="all-projects">
          <Link to="/projects">
            <button className="btn">View All</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="loading">
      <div className="loading-anim" />
    </div>
  );
};

const allProjects = gql`
  query allProjects {
    allProjects(first: 2) {
      id
      name
      type
      link
      image {
        url
      }
    }
  }
`;

export default graphql(allProjects)(Projects);
