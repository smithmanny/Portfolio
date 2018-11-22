import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const ExtLink = ({ children, ...props }) => {
  return <Link {...props} target='_blank'>{children}</Link>
}

const Link = styled(OutboundLink)`
  text-shadow: none;
  background-image: none;
`

export default ExtLink
