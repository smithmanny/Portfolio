import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Button from '../components/shared/Button'
import Posts from '../components/Posts'
import Projects from '../components/Projects'

const IndexPage = () => (
  <Layout>
    <Section>
      <h1>Hi, I'm Shakhor Smith</h1>
      <p>I'm a Software Engineer from Ft. Lauderdale, FL living in Atlanta. On my free time I like to build projects and also help people learn how to code.</p>

      <Button>Read more</Button>
    </Section>

    <Section>
      <h2>Latest Posts</h2>
      <Posts />
      <Button section>View All</Button>
    </Section>

    <Section>
      <h2>Latest Projects</h2>
      <Projects />
    </Section>

  </Layout>
)

const Section = styled.section`
  padding: 40px 0;
`

export default IndexPage
