import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from '../SocialIcons/SocialIcons';
import Icon from '../SocialIcons/Icon';
// Assets
import Logo from '../../img/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-links">
        {/* <Link to="/blog">
          <div>Blog</div>
        </Link> */}
        <a
          href="https://medium.com/@shakhorsmith"
          rel="noopener noreferrer"
          target="_blank">
          <div>Blog</div>
        </a>
        <Link to="/about">
          <div>About Me</div>
        </Link>
        <Link to="/projects">
          <div>Projects</div>
        </Link>
      </div>
      <div className="header-logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Social Icons */}
      <SocialIcons>
        <Icon
          link="https://www.youtube.com/channel/UC33Y0c5LX9Z2TvtxpztaFUA?view_as=subscriber"
          icon="fab fa-youtube"
          alt="Youtube Channel"
          color="#ff0000"
        />
        <Icon
          link="http://github.com/smithmanny"
          icon="fab fa-github"
          alt="Github Profile"
          color="#333"
        />
        <Icon
          link="https://twitter.com/Smithmanny"
          icon="fab fa-twitter"
          alt="Twitter Profile"
          color="#1da1f2"
        />
        <Icon
          link="https://www.linkedin.com/in/shakhor-smith/"
          icon="fab fa-linkedin"
          alt="Linkedin Profile"
          color="#0070AD"
        />
      </SocialIcons>
    </header>
  );
};

export default Header;
