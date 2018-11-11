import React from 'react'
import styled from 'styled-components'

import Moon from '../../images/moon.svg'

const SocialLinks = () => {
  const links = [
    {
      icon: 'moon',
      action: 'toggle theme func',
    },
    {
      icon: 'github',
      route: 'https://github.com/smithmanny',
    },
    {
      icon: 'twitter',
      route: 'https://twitter.com/smithmanny',
    }
  ]

  return (
    <div style={{ display: 'flex' }}>
      {links.map(link => {
          if (!link.route) {
            return (
              <SocialLink key={link.icon}>
                <img src={Moon} alt={link.icon} style={{ width: '100%' }} />
              </SocialLink>
            )
          }

          return (
            <SocialLink key={link.icon}>
              <img src={Moon} alt={link.icon} style={{ width: '100%' }} />
            </SocialLink>
        )}
      )}
    </div>
  )
}

const SocialLink = styled.li`
  list-style-type: none;
  margin: 0 15px;
  width: 30px;
  height: 30px;

  :last-child {
    margin-right: 0;
  }
`

export default SocialLinks;