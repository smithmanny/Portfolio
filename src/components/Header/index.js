import React from 'react'
import styled from 'styled-components'

import { media } from '../../utils/utils'

import SocialLinks from './SocialLinks'
import { StyledLink } from '../shared/StyledLink'

const Header = ({ menuLinks, siteTitle, toggleTheme }) => (
  <Nav>
    <h2 style={{ margin: 0, fontSize: 22 }}>
      <StyledLink to="/">
        {siteTitle}
      </StyledLink>
    </h2>

    <SocialLinks toggleTheme={toggleTheme} />

    <HeaderLink>
      {menuLinks.map(link =>
        <HeaderItem key={link.name}>
          <StyledLink to={link.link}>{link.name}</StyledLink>
        </HeaderItem>
      )}
    </HeaderLink>
  </Nav>
)

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;

  ${ media.mobile`grid-template-columns: 50% 50%;` }
`

const HeaderItem = styled.li`
  list-style-type: none;
  margin: 0 15px;
`

const HeaderLink = styled.ul`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 1rem 0;
  grid-column: 2 / 3;
  grid-row: 1;

  ${ media.tablet`
    grid-column: 1 / span 3;
    grid-row: 2;
  ` }

  ${ media.mobile`
    grid-column: 1 / span 3;
    grid-row: 2;
  ` }
`

export default Header
