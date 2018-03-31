import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';

import './Header.css';

const Header = () => {
    return <header className="header">
        <div className="header-links">
          <div>Blog</div>
          <div>About</div>
          <div>Projects</div>
        </div>
        <div className="header-logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="header-social">
          <div className="fa-2x">
            <i className="fab fa-github" style={{ color: '#333' }} />
          </div>
          <div className="fa-2x">
            <i className="fab fa-twitter" style={{ color: '#1da1f2' }} />
          </div>
          <div className="fa-2x">
            <i className="fab fa-linkedin" style={{ color: '#0070AD' }} />
          </div>
        </div>
      </header>;
}

export default Header