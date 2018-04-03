import React from 'react';
import Header from '../../components/Header/Header';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
// Assets
import '../../components/Projects/Projects.css';

const Projects = ({ data: { loading, allProjects } }) => {
  if (!loading) {
    return (
      <div className="container">
        <Header />
        <div className="wrapper">
          <h2 className="title">Projects</h2>

          <div className="projects-wrapper">
            {allProjects.map(project => (
              <div className="project" key={project.id}>
                <img className="project-img" src={project.image.url} alt="" />

                <div className="project-info">
                  <h3>{project.name}</h3>
                  <button className="btn">
                    <a href={project.link} rel="noopener noreferrer">
                      View Project
                    </a>
                  </button>{' '}
                  <h4>{project.type}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="all-projects">
            <button className="btn">View More</button>
          </div> */}
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
    allProjects {
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
