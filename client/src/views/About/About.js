import React from 'react';
// Assets
import './About.css';
import Me from '../../img/prof_headshot.jpg';

const youtube =
  'https://www.youtube.com/channel/UC33Y0c5LX9Z2TvtxpztaFUA?view_as=subscriber';

const medium = 'https://medium.com/@shakhorsmith';

const About = () => (
  <div className="container">
    <div className="wrapper">
      <div className="about-me">
        <div className="about-left">
          <div className="about-img">
            <img src={Me} alt="" />
          </div>
          <h2 className="title">Shakhor Smith</h2>
        </div>

        <div className="about-content">
          <h1 className="title">About Me</h1>
          <p>
            Hi, my name is Shakhor Smith and I'm a self-taught{' '}
            <span>Web / JavaScript</span> Developer. I'm originally from Ft.
            Lauderdale, Florida, but currently living in Atlanta, Georgia. I am
            currently developing React and Node applications, and eventually
            becoming a Software Developer. I would like to think as myself as an
            entrepreneur in the making, focusing on building applications / web
            apps for small to medium sized business. My passion has always been
            being able to help people, which I took the first step making{' '}
            <span id="youtube">
              <a href={youtube} target="_blank" rel="noopener noreferrer">
                Youtube videos
              </a>
            </span>{' '}
            😁 and{' '}
            <span id="medium">
              <a href={medium} target="_blank" rel="noopener noreferrer">
                writing articles
              </a>
            </span>{' '}
            about developing. So if you're here to learn more about developing,
            head over to the blog section, or if you think I'm perfect for your
            project, feel free to{' '}
            <span id="contact">
              <a href="mailto:contact@shakhorsmith.com">contact me.</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
