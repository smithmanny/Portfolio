import React from 'react'
import styled from 'styled-components'

import { media } from '../../utils/utils'

import ExtLink from '../shared/ExtLink'

import Moon from '../../images/moon.svg'
import Github from '../../images/github.svg'
import Twitter from '../../images/twitter.svg'

const SocialLinks = ({ toggleTheme }) => {
  return (
    <SocialWrapper>
      <SocialLink>
        <ExtLink>
          <SocialImg src={Moon} alt="Toggle Background" onClick={toggleTheme} />
        </ExtLink>
      </SocialLink>

      <SocialLink>
        <ExtLink href="https://github.com/smithmanny">
          <SocialImg src={Github} alt="Github" />
        </ExtLink>
      </SocialLink>

      <SocialLink>
        <ExtLink href="https://twitter.com/smithmanny">
          <SocialImg src={Twitter} alt="Twitter" />
        </ExtLink>
      </SocialLink>
    </SocialWrapper>
  )
}

const SocialWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-column: 3 / 4;
  grid-row: 1;

  ${ media.mobile`
    grid-column: 2 / 3;
  ` }
`

const SocialImg = styled.img`
  width: 100%;
`

const SocialLink = styled.li`
  list-style-type: none;
  margin: 0 15px;
  width: 25px;
  height: 25px;

  :last-child {
    margin-right: 0;
  }
`

export default SocialLinks
