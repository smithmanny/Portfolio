import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

// Assets (Resume, Images, Styles)
import '../styles/home.css';
import '../font-mfizz/font-mfizz.css';
import Resume from '../Shakhor_Smith_Resume.pdf';

class Home extends Component {
  render() {
    return (
      <div>
        <div id="intro-wrapper">
          <Header />

          <div className="intro">
            <h1>Hello, my name is Shakhor Smith.</h1>
            <h3>
              I'm a <span>Full Stack</span> JavaScript Developer.
            </h3>
          </div>

          <div className="circles">
            <div className="circle small-circle" />
            <div className="circle big-circle" />
          </div>
        </div>

        {/* About Me Section */}
        <section className="wrapper">
          <div className="title">
            <h2>Skills</h2>
            <p>Over 1 year of experience using these languages.</p>
          </div>
          <div className="skills">
            <div>
              <i className="icon-npm" alt="NPM" />
              <i className="icon-gulp" alt="Gulp" />
              <i className="icon-git" alt="Git" />
              <i className="icon-mysql" alt="MySQL" />
              <i className="icon-mongodb" />
            </div>
            {/* Front-End Languages & Frameworks */}
            <div>
              <i className="icon-html5" alt="HTML5" />
              <i className="icon-css3" alt="CSS3" />
              <i className="icon-sass" alt="Sass" />
              <i className="icon-bootstrap" alt="Bootstrap" />
              {/* <i className="icon-javascript" /> */}
              <i className="icon-jquery" alt="Jquery" />
              <i className="icon-reactjs" />
              <i className="icon-php" alt="PHP" />
              <i className="icon-symfony" alt="Symfony" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="wrapper">
          <h2 className="title">Services</h2>
          <div className="service-wrapper">
            <div className="service">
              <h4>Branding</h4>
              <p>
                I can help your organization create a high-impact identity that
                will leave a lasting impression.
              </p>
            </div>
            <div className="service">
              <h4>Website Development</h4>
              <p>
                From WordPress to Web Apps, I have the talent to develop
                incredible projects using the best practices.
              </p>
            </div>
            <div className="service">
              <h4>Marketing Optimization</h4>
              <p>
                I can help drive traffic to your website and help generate
                leads.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />

        <Footer />
      </div>
    );
  }
}

export default Home;
