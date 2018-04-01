import React from 'react';
import SocialIcons from '../SocialIcons/SocialIcons';
import Icon from '../SocialIcons/Icon';
// Assets
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <SocialIcons location='footer-social'>
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

      <div id="copyright">
        <small>
          Designed and developed by{' '}
          <a
            href="https://shakhorsmith.com">
            Shakhor Smith
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
