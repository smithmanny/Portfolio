import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';

import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-links">
                <div>Blog</div>
                <div>About</div>
                <div>Contact</div>
            </div>
            <div className="header-logo">
                <Link to="/">
                    <img src={Logo} alt="Logo"/>
                </Link>
            </div>
            <div className="header-social">
                <div>Github</div>
                <div>Twitter</div>
                <div>Linkedin</div>
            </div>
        </header>
    )
}

export default Header