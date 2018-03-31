import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

// Assets
import '../styles/home.css';

class Home extends Component {
  render() {
    return <div>
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

        {/* Skills Section */}
        <section className="wrapper skills-wrapper">
          <div className="title">
            <h2>Skills</h2>
            <p>Over 1 year of experience using these languages.</p>
          </div>
          <div className="skills">
            <div className="skill">
              <i className="fab fa-html5" style={{ color: '#E14322' }} />
            </div>
            <div className="skill">
              <i className="fab fa-css3-alt" style={{ color: '#239FDC' }} />
            </div>
            <div className="skill">
              <i className="fab fa-js" style={{ color: '#EED646' }} />
            </div>
            <div className="skill">
              <i className="fab fa-react" style={{ color: '#4ED4FA' }} />
            </div>
            <div className="skill">
              <i className="fab fa-node" style={{ color: '#85BD37' }} />
            </div>
            <div className="skill">
              <i className="fab fa-wordpress-simple" style={{ color: '#3D3D3D' }} />
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
                I can help your organization create a high-impact identity
                that will leave a lasting impression.
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
        {/* <Contact /> */}

        <Footer />
      </div>;
  }
}

export default Home;
