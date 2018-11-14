import { Link } from 'gatsby'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  text-shadow: none;
  background-image: none;
  
  :hover {
    text-decoration: underline;
  }
`
