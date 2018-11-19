import React from 'react'
import styled from 'styled-components'

import { media } from '../../utils/utils'

import Moon from '../../images/moon.svg'
import Github from '../../images/github.svg'
import Twitter from '../../images/twitter.svg'

const SocialLinks = ({ toggleTheme }) => {
  return (
    <SocialWrapper>
      <SocialLink>
        <img src={Moon} alt="Toggle Background" style={{ width: '100%' }} onClick={toggleTheme} />
      </SocialLink>
      <SocialLink>
        <img src={Github} alt="Github" style={{ width: '100%' }} />
      </SocialLink>
      <SocialLink>
        <img src={Twitter} alt="Twitter" style={{ width: '100%' }} />
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
