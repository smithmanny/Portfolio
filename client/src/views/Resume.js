import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import '../styles/resume.css';

class Resume extends Component {
  render() {
    return(
      <Container>
        <div className="actions">
          <a href="/"><i className="fa fa-arrow-left" aria-hidden="true">&nbsp; Back To Site</i></a>
          <i className="fa fa-file" aria-hidden="true">&nbsp; Download As PDF</i>
        </div>
        <div className="wrapper">
          <Row>
            <Col xs="12" className="intro">
              <h1 className="text-center">Shakhor Smith</h1>
            </Col>
            <Col  xs="12" className="social">
              <p className="my-0">4288 Leola Rd. Douglasville, GA 30135</p>
              <ul>
                <li><a href="https://github.com/smithmanny" rel="noopener" target="_blank">Github</a></li>
                <li><a href="https://linkedin.com/in/shakhor-smith" rel="noopener" target="_blank">Linkedin</a></li>
              </ul>
                <p>WordPress	&	Front-End	Web	Developer	with	1	year	of	experience.	I'm	a	selftaught developer	who	taught	myself	server-side	scripting	language	(PHP), structured	query	language	(SQL)	and	front-end	frameworks (jQuery, React)	with	the	goal	to	continue	growing	to	become	a	Full	Stack	Developer.</p>
            </Col>
          </Row>
          {/* Start of Education and Experience */}
          <Row>
            <Col xs="12" lg="8">
              <h3 className="my-3 text-uppercase">Education</h3>
              <strong><h5>Computer Science/<span>Georgia State University - B.S.</span></h5></strong>
              <small>2016 - PRESENT</small>
              {/* Experience */}
              <h3 className="mt-5 mb-3 text-uppercase">Experience</h3>
              <strong><h5>Web Developer/<span>The Flag Company - Acworth, GA</span></h5></strong>
              <small>2017 - PRESENT</small>
              <ul>
                <li>Work closely with developers and designers to build mobile responsive websites</li>
                <li>Find and fix bugs to ensure best customer experience</li>
                <li>Work on back-end projects using PHP and MySQL</li>
              </ul>

              <strong><h5>Freelancer/<span>Atlanta, GA</span></h5></strong>
              <small>2017 - PRESENT</small>
              <ul>
                <li>Design and build websites based on client needs</li>
              </ul>

              <strong><h5>Order Selector/<span>Publix Warehouse - Austell, GA</span></h5></strong>
              <small>2015 - 2016</small>
              <ul>
                <li>Build custom orders for retail stores and maintain accuracy of order</li>
                <li>Constantly surpassed daily production goal by 20%</li>
              </ul>
            </Col>
            <Col xs="12" lg="4">
              <h3 className="text-uppercase">Languages</h3>
              <ul className="accomplisments">
                <li className="icon-html5">&nbsp; HTML5</li>
                <li className="icon-css3">&nbsp; CSS3</li>
                <li className="icon-javascript">&nbsp; JavaScript</li>
                <li className="icon-npm">&nbsp; PHP</li>
                <li className="icon-mysql">&nbsp; MySQL</li>
                <li className="icon-nodejs">&nbsp; Node/Express</li>
              </ul>

              <h3 className="text-uppercase">Frameworks</h3>
              <ul className="accomplisments">
                <li className="icon-bootstrap">&nbsp; Bootstrap</li>
                <li className="icon-sass">&nbsp; Sass</li>
                <li className="icon-jquery">&nbsp;jQuery</li>
                <li className="icon-symfony">&nbsp; Symfony</li>
                <li className="icon-reactjs">&nbsp; React</li>
              </ul>

              <h3 className="text-uppercase">Extras</h3>
              <ul className="accomplisments">
                <li className="icon-git">&nbsp; Git</li>
                <li className="icon-gulp">&nbsp; Gulp</li>
                <li className="icon-npm">&nbsp; NPM</li>
                <li className="icon-wordpress">&nbsp; WordPress</li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}

export default Resume;
