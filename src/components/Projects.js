import React from 'react'
import styled from 'styled-components'

import { media } from '../utils/utils'
import Button from '../components/shared/Button'
import Github from '../images/github.svg'

const Projects = ({ projects, title }) => (
  <Container>
    <ProjectWrapper>
      <ProjectTitle>Slyderz</ProjectTitle>

      <ProjectButtonWrapper>
        <ProjectButton href='https://slyderz.co'>View Site</ProjectButton>
      </ProjectButtonWrapper>
    </ProjectWrapper>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ProjectWrapper = styled.div`
  display: flex;
  width: 350px;
  margin: 30px 0;
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  align-items: center;
`

const ProjectTitle = styled.h4`
  margin: 0;
`
const ProjectButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

const ProjectButton = styled.a`
  height: 40px;
  border: 2px solid ${ props => props.theme.secondary };
  padding: 5px 15px;
  font-size: .87rem;
`

const ProjectTag = styled.small`
  background-color: ${ props => props.theme.secondary };
  border: none;
  border-radius: 15px;
  color: white;
  margin: 0 auto;
  height: 30px;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`

const ProjectSummary = styled.p`
  text-align: center;
  margin-top: 10px;
`

export default Projects
