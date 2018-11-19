import React from 'react'
import styled from 'styled-components'

const Button = ({ children, onClick, ...props }) => (
  <ButtonStyle onClick={onClick} {...props}>{children}</ButtonStyle>
)

const ButtonStyle = styled.button`
  background-color: ${ props => props.theme.secondary };
  border: none;
  color: #FFFFFC;
  width: 150px;
  height: 45px;
  border-radius: 75px;
  margin-top: ${ props => props.section ? '15px' : '5px' }
`

export default Button
