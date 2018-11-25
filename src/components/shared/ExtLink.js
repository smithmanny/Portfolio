import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ExtLink = ({ children, ...props }) => {
  return <OutboundLink {...props} target='_blank'>{children}</OutboundLink>
}

const OutboundLink = styled(Link)`
  text-shadow: none;
  background-image: none;
`

export default ExtLink
