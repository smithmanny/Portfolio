import React from 'react'
import { Link } from 'gatsby'

import SocialLinks from './SocialLinks'
import { StyledLink } from '../shared/StyledLink'

const Header = ({ menuLinks, siteTitle }) => (
  <nav
    style={{
      display: 'grid',
      gridTemplateColumns: '50% 50%',
    }}
  >
    <h1 style={{ margin: 0, fontSize: 24 }}>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>

    <SocialLinks />

    <ul style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', margin: '1rem 0', gridColumn: '1 / span 2' }}>
      {menuLinks.map(link =>
        <li key={link.name} style={{ 'listStyleType': 'none', margin: '0 15px' }}>
          <StyledLink to={link.link}>{link.name}</StyledLink>
        </li>
      )}
    </ul>
  </nav>
)

export default Header
