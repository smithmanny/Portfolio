import React from 'react'
import styled from 'styled-components'

import { media } from '../utils/utils'
import Button from '../components/shared/Button'
import Github from '../images/github.svg'

const Projects = ({ Projects, title }) => (
  <Container>
    <ProjectWrapper>
      Projects
    </ProjectWrapper>

    <ProjectWrapper>
      Projects
    </ProjectWrapper>

    <ProjectWrapper>
      Projects
    </ProjectWrapper>

    <ProjectWrapper>
      Projects
    </ProjectWrapper>

  </Container>
)

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ProjectWrapper = styled.div`
  width: 300px;
  margin: 30px 0;
  border-bottom: 1px solid black;
`

export default Projects
