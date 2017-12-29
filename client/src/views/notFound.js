import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

import logo  from '../img/1.png'
import '../styles/notFound.css';

const NotFound = () => {
  return (
    <div className="main">
      <Helmet>
        <title>Page Not Found | Shakhor Smith</title>
      </Helmet>
      <div className="back_home">
        <Link to="/"><h5>Back Home</h5></Link>
      </div>
      <img
        src={logo}
        alt="Background"
        className="notFoundBanner" />

    </div>
  );
};

export default NotFound;
