import React from 'react'
import styled from 'styled-components'

import { media } from '../utils/utils'
import Button from '../components/shared/Button'
import Github from '../images/github.svg'

const Projects = ({ Projects, title }) => (
  <Container>
    <ProjectWrapper>
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectTag>E-commerce</ProjectTag>
      <ProjectSummary>This is the product summary with an extended summary so that I can see how it looks.</ProjectSummary>

      <ProjectButtonWrapper>
        <ProjectButton>View Code</ProjectButton>
        <ProjectButton>View Demo</ProjectButton>
      </ProjectButtonWrapper>
    </ProjectWrapper>

    <ProjectWrapper>
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectTag>E-commerce</ProjectTag>
      <ProjectSummary>This is the product summary</ProjectSummary>
    </ProjectWrapper>

    <ProjectWrapper>
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectTag>E-commerce</ProjectTag>
      <ProjectSummary>This is the product summary</ProjectSummary>
    </ProjectWrapper>

    <ProjectWrapper>
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectTag>E-commerce</ProjectTag>
      <ProjectSummary>This is the product summary</ProjectSummary>
    </ProjectWrapper>

  </Container>
)

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ProjectButton = styled.button`
  height: 40px;
  border: 2px solid ${ props => props.theme.secondary };
  padding: 5px 15px;
  font-size: .87rem;
`

const ProjectButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProjectTag = styled.small`
  background-color: ${ props => props.theme.secondary };
  border: none;
  border-radius: 15px;
  color: white;
  margin: 0 auto;
  height: 30px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`

const ProjectSummary = styled.p`
  text-align: center;
  margin-top: 10px;
`

const ProjectTitle = styled.h4`
  text-align: center;
`

const ProjectWrapper = styled.div`
  width: 300px;
  height: auto;
  margin: 30px 0;
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
`

export default Projects
