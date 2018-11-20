import React from 'react'
import styled from 'styled-components'

const ExtLink = ({ children, ...props }) => {
  return <Link {...props} target='_blank'>{children}</Link>
}

const Link = styled.a`
  text-shadow: none;
  background-image: none;
`

export default ExtLink
