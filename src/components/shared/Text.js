import styled from 'styled-components'

export const PageTitle = styled.h1`
  text-align: center;
  color: ${ props => props.theme.title };
  margin-bottom: ${ props => props.blogPost ? '100px' : null };
`

export const PageSubTitle = styled.p`
  text-align: center;
`
