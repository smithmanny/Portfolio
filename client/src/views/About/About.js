import React from 'react';
// Assets
import './About.css';
import Me from '../../img/prof_headshot.jpg';

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
            being able to help people, which I took the first step doing{' '}
            <span id="youtube">Youtube videos</span> 😁 and{' '}
            <span id="medium">writing articles</span> 
            {' '} about developing.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
