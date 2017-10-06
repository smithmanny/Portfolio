import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
// Assets (Resume, Images, Styles)
import '../styles/home.css';
import '../font-mfizz/font-mfizz.css';
import Resume from '../Shakhor_Smith_Resume.pdf';
import Project_1 from '../img/project_1.jpeg';
import Project_2 from '../img/project_2.jpeg';
import Project_3 from '../img/project_3.jpeg';
// Form Views
import DefaultView from './form/DefaultView';
import ErrorView from './form/ErrorView';
import SentView from './form/SentView';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      sent: '',
      msg: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  async handleSubmit(event) {
    event.preventDefault();

    const { name, email, message } = this.state;
    const captcha = document.querySelector('#g-recaptcha-response').value;

    const form = await axios.post('/api/form', {
      name,
      email,
      message,
      captcha
    });

    // Check captcha status
    if (form.data.success === false) {
      this.setState({ sent: false, msg: form.data.msg });
    } else {
      this.setState({ sent: true });
      await this.clearForm();
    }
  }

  // Clear Form after submit
  clearForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
      error: ''
    });
  }

  renderStatus() {
    switch (this.state.sent) {
      case false:
        return <ErrorView text={this.state.msg} />;
      case true:
        return <SentView />;
      default:
        return <DefaultView />;
    }
  }

  render() {
    return (
      <div>
        <div id="intro">
          <h1>Shakhor Smith</h1>
          <h1>Full Stack Developer</h1>
        </div>

        {/* About Me Section */}
        <section id="about">
          <Container>
            <h2 className="text-center">About Me</h2>
            <p className="text-center">
              Hi, my name is Shakhor Smith and I'm a Full Stack Developer with
              experience in both LAMP and MERN stack. During work, I'm working
              with PHP, MySQL, and Vue. On my off hours I transform into a
              Javascript ninja working with MongoDB, Express, React JS, and
              Node. I'm in the process of switching into a software engineer
              working with Full Stack Javascript as well as Java to build
              applications for both web and mobile.
            </p>
            <div className="skills">
              <div className="mb-2">
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
          </Container>
        </section>

        {/* Project Section */}
        <section id="projects">
          <Container>
            <div className="mb-4 text-center">
              <h2>Projects</h2>
            </div>
            <Row>
              {/* Project 1 */}
              <Col xs="12" md="6" lg="4" className="mb-4">
                <div className="projectWrapper level-3">
                  <div className="projectImg">
                    <img
                      src={Project_1}
                      alt="Github Logo"
                      className="img-fluid"
                    />
                  </div>
                  <div className="projectInfo my-4">
                    <h2 className="text-center">Sharonne Lanier</h2>
                    <p className="m-0 text-center">
                      WordPress website designed and developed for actress
                      Sharonne Lanier
                    </p>
                  </div>
                  <div className="projectSkills my-4">
                    <Row>
                      <Col>
                        <i className="icon-html5" alt="HTML5" />
                      </Col>
                      <Col>
                        <i className="icon-css3" alt="CSS3" />
                      </Col>
                      <Col>
                        <i className="icon-sass" alt="Sass" />
                      </Col>
                      <Col>
                        <i className="icon-bootstrap" alt="Bootstrap" />
                      </Col>
                      <Col>
                        <i className="icon-jquery" alt="jQuery" />
                      </Col>
                      <Col>
                        <i className="icon-php" alt="PHP" />
                      </Col>
                      <Col>
                        <i className="icon-wordpress" alt="WordPress" />
                      </Col>
                    </Row>
                  </div>
                  <div className="text-center my-4 code">
                    <a
                      href="https://github.com/smithmanny/Sharonne-Lanier"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>View Project</button>
                    </a>
                  </div>
                </div>
              </Col>

              {/* Project 2 */}
              <Col xs="12" md="6" lg="4" className="mb-4">
                <div className="projectWrapper level-3">
                  <div className="projectImg">
                    <img
                      src={Project_2}
                      alt="Github Logo"
                      className="img-fluid"
                    />
                  </div>
                  <div className="projectInfo my-4">
                    <h2 className="text-center">Emaily App</h2>
                    <p className="m-0 text-center">
                      App to send out email surveys built with Node + React +
                      Redux Form + MongoDB
                    </p>
                  </div>
                  <div className="projectSkills my-4">
                    <Row>
                      <Col>
                        <i className="icon-html5" alt="HTML5" />
                      </Col>
                      <Col>
                        <i className="icon-css3" alt="CSS3" />
                      </Col>
                      <Col>
                        <i className="icon-reactjs" alt="React" />
                      </Col>
                      <Col>
                        <i className="icon-nodejs" alt="Node" />
                      </Col>
                      <Col>
                        <i className="icon-mongodb" alt="Jquery" />
                      </Col>
                    </Row>
                  </div>
                  <div className="text-center my-4">
                    <a
                      href="https://github.com/smithmanny/Emaily"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>View Code</button>
                    </a>
                    <a
                      href="https://aqueous-stream-25587.herokuapp.com/"
                      className="mx-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>View Project</button>
                    </a>
                  </div>
                </div>
              </Col>

              {/* Project 3 */}
              <Col xs="12" md="6" lg="4" className="mb-4">
                <div className="projectWrapper level-3">
                  <div className="projectImg">
                    <img
                      src={Project_3}
                      alt="Github Logo"
                      className="img-fluid"
                    />
                  </div>
                  <div className="projectInfo my-4">
                    <h2 className="text-center">Home Decor</h2>
                    <p className="m-0 text-center">
                      Home Decor website where clients can request quotes to
                      rent furniture
                    </p>
                  </div>
                  <div className="projectSkills my-4">
                    <Row>
                      <Col>
                        <i className="icon-html5" alt="HTML5" />
                      </Col>
                      <Col>
                        <i className="icon-css3" alt="CSS3" />
                      </Col>
                      <Col>
                        <i className="icon-php" alt="PHP" />
                      </Col>
                      <Col>
                        <i className="icon-heroku" alt="Heroku" />
                      </Col>
                    </Row>
                  </div>
                  <div className="text-center my-4">
                    <a
                      href="https://github.com/smithmanny/Khadija-Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      cursor="pointer"
                    >
                      <button>View Code</button>
                    </a>
                    <a
                      href="https://khadija.herokuapp.com/"
                      className="mx-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>View Project</button>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Container>
            {/* Render Form paragraph with sent status */}
            {this.renderStatus()}
            {/* Contact Form */}
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange.bind(this)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange.bind(this)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message/Comment</Label>
                <Input
                  type="textarea"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange.bind(this)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <div
                  className="g-recaptcha"
                  data-sitekey="6LfWPTMUAAAAAO-5cU6hv9bHBX08DVUrvIrvnrRl"
                />
              </FormGroup>
              <button>Submit</button>
            </Form>
          </Container>
        </section>

        {/* Social Section */}
        <section id="social">
          <Container>
            <div className="text-center">
              <h2 style={{ color: 'white' }}>Around The Web</h2>
              <div className="social">
                <a
                  href="https://github.com/smithmanny"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" alt="Github" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shakhor-smith/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-linkedin"
                    alt="Linkedin"
                    aria-hidden="true"
                  />
                </a>
                <a href={Resume} rel="noopener" target="_blank" alt="Resume">
                  <i className="fa fa-file-pdf-o" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Container>
        </section>

        <footer id="footer">
          <div id="copyright">
            <small>
              Designed and developed by{' '}
              <a
                href="https://shakhorsmith.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shakhor Smith
              </a>
            </small>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
