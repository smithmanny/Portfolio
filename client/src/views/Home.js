import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, FormFeedback, Input, Label } from "reactstrap";
import axios from "axios";
import "../styles/home.css";
import "../font-mfizz/font-mfizz.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
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

    axios.post('/api/form', { name, email, message })
    await this.clearForm();
  };

  // Clear Form after submit
  clearForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
      error: ""
    });
  }

  render() {
    return (
      <div>
        <div id="intro">
          <h1>Shakhor Smith</h1>
          <h1>WordPress & Front-End Web Developer</h1>
        </div>

        {/* About Me Section */}
        <section id="about">
          <Container>
            <h1 className="text-center">About Me</h1>
            <p className="text-center">
              My name is Shakhor Smith and I'm a WordPress & Front-End Web
              Developer based in Atlanta, GA. I found my passion for Web
              Development in high school and decided to teach myself with the
              help of{" "}
              <a href="http://referrals.trhou.se/shakhorsmith">
                Team Treehouse
              </a>. I continue to learn everyday to purse my goal of becoming a
              Full Stack Developer and eventually transition into mobile
              applications as well. Outside of developing I'm adventurous so you
              can catch me traveling the world and spending time with family.{" "}
            </p>
            <div className="skills">
              <div className="mb-2">
                <i className="icon-npm" alt="NPM" />
                <i className="icon-gulp" alt="Gulp" />
                <i className="icon-git" alt="Git" />
                <i className="icon-mysql" alt="MySQL" />
                {/* <i className="icon-mongodb" /> */}
              </div>
              {/* Front-End Languages & Frameworks */}
              <div>
                <i className="icon-html5" alt="HTML5" />
                <i className="icon-css3" alt="CSS3" />
                <i className="icon-sass" alt="Sass" />
                <i className="icon-bootstrap" alt="Bootstrap" />
                {/* <i className="icon-javascript" /> */}
                <i className="icon-jquery" alt="Jquery" />
                {/* <i className="icon-reactjs" /> */}
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
              <h1>Projects</h1>
            </div>
            <Row>
              {/* Project 1 */}
              <Col xs="12" md="6" lg="4" className="mb-4">
                <div className="projectWrapper level-3">
                  <div className="projectImg">
                    <img
                      src="https://unsplash.it/350"
                      alt="Github Logo"
                      className="img-fluid"
                    />
                  </div>
                  <div className="projectInfo my-4">
                    <h2 className="text-center">Sharonne Lanier</h2>
                    <p className="m-0 text-center">
                      shdaklhdadnasldkakldnalkdnasldasldhsaldasdasddaskdasldhasdhasdlhasdlasdhasldhasldhasldhsadlashdl
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
                      {/* <Col>
                          <i className="icon-javascript" alt="Javascript" />
                        </Col> */}
                      <Col>
                        <i className="icon-jquery" alt="Jquery" />
                      </Col>
                      <Col>
                        <i className="icon-php" alt="PHP" />
                      </Col>
                    </Row>
                  </div>
                  <div className="text-center my-4">
                    <button>View Project</button>
                  </div>
                </div>
              </Col>

              {/* Project 2 */}
              <Col xs="12" md="6" lg="4" className="mb-4">
                <div className="projectWrapper level-3">
                  <div className="projectImg">
                    <img
                      src="https://unsplash.it/350"
                      alt="Github Logo"
                      className="img-fluid"
                    />
                  </div>
                  <div className="projectInfo my-4">
                    <h2 className="text-center">Project Name</h2>
                    <p className="m-0 text-center">
                      shdaklhdadnasldkakldnalkdnasldasldhsaldasdasddaskdasldhasdhasdlhasdlasdhasldhasldhasldhsadlashdl
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
                      {/* <Col>
                          <i className="icon-javascript" alt="Javascript" />
                        </Col> */}
                      <Col>
                        <i className="icon-jquery" alt="Jquery" />
                      </Col>
                      <Col>
                        <i className="icon-php" alt="PHP" />
                      </Col>
                    </Row>
                  </div>
                  <div className="text-center my-4">
                    <button>View Project</button>
                  </div>
                </div>
              </Col>

              {/* Project 3 */}
              <Col xs="12" md="6" lg="4" className="mb-4">
                <div className="projectWrapper level-3">
                  <div className="projectImg">
                    <img
                      src="https://unsplash.it/350"
                      alt="Github Logo"
                      className="img-fluid"
                    />
                  </div>
                  <div className="projectInfo my-4">
                    <h2 className="text-center">Project Name</h2>
                    <p className="m-0 text-center">
                      shdaklhdadnasldkakldnalkdnasldasldhsaldasdasddaskdasldhasdhasdlhasdlasdhasldhasldhasldhsadlashdl
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
                      {/* <Col>
                          <i className="icon-javascript" alt="Javascript" />
                        </Col> */}
                      <Col>
                        <i className="icon-jquery" alt="Jquery" />
                      </Col>
                      <Col>
                        <i className="icon-php" alt="PHP" />
                      </Col>
                    </Row>
                  </div>
                  <div className="text-center my-4">
                    <button>View Project</button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Container>
            <div className="mb-4">
              <h1 className="text-center">Get In Touch</h1>
              <p>
                I love working on unique websites, if you have any questions or
                have an interesting project you think I'm the perfect one to do,
                send me an email below:
              </p>
            </div>
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
              <button>Submit</button>
            </Form>
          </Container>
        </section>

        {/* Social Section */}
        <section id="social">
          <Container>
            <div className="text-center">
              <h1>Around The Web</h1>
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
                <a href="/resume"><i
                  className="fa fa-file-pdf-o"
                  alt="Resume"
                  aria-hidden="true"
                />
              </a>
              </div>
            </div>
          </Container>
        </section>

        <footer id="footer">
          <div id="copyright">
            Designed and developed by{" "}
            <a
              href="https://shakhorsmith.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shakhor Smith
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
