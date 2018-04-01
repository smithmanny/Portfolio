import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <div className="fa-2x">
          <a href="https://www.youtube.com/channel/UC33Y0c5LX9Z2TvtxpztaFUA?view_as=subscriber" alt="Youtube Channel" target="_blank" rel="noopener noreferrer" >
            <i className="fab fa-youtube" alt="Youtube Channel" style={{ color: '#ff0000' }} />
          </a>
        </div>
        <div className="fa-2x">
          <a href="http://github.com/smithmanny" alt="Github Profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" style={{ color: '#333' }} />
          </a>
        </div>
        <div className="fa-2x">
          <a href="https://twitter.com/Smithmanny" alt="Twitter Profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" style={{ color: '#1da1f2' }} />
          </a>
        </div>
        <div className="fa-2x">
          <a href="https://www.linkedin.com/in/shakhor-smith/" alt="Linkedin Profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" style={{ color: '#0070AD' }} />
          </a>
        </div>
      </div>

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
