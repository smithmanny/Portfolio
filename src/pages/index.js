import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Button from '../components/shared/Button'
import Posts from '../components/Posts'
import Projects from '../components/Projects'

export default ({ data }) => (
  <Layout>
    <Section>
      <Title>Hi, I'm Shakhor Smith</Title>
      <p>I'm a Software Engineer from Ft. Lauderdale, FL living in Atlanta. On my free time I like to build projects and also help people learn how to code.</p>

      <Button to='/about'>Read more</Button>
    </Section>

    <Section>
      <SectionTitle>Latest Posts</SectionTitle>
      <Posts posts={data.allMarkdownRemark.edges} />
      <Button to='/blog' section='true'>View All</Button>
    </Section>

    <Section>
      <SectionTitle>Latest Projects</SectionTitle>
      <Projects />
    </Section>

  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date
            slug
          }
        }
      }
    }
  }
`

const Title = styled.h1`
  color: ${ props => props.theme.title };
`

const SectionTitle = styled.h2`
  color: ${ props => props.theme.title };
`

const Section = styled.section`
  padding: 40px 0;
`
