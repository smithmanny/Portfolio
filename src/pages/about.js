import React from 'react'
import styled from 'styled-components'

import Layout from '../containers/Layout'
import { PageTitle, PageSubTitle } from '../components/shared/Text'

const About = () => (
  <Layout>
    <PageTitle>About Me</PageTitle>
    <PageSubTitle>Software Engineer 🚀</PageSubTitle>
    <p>Hi, my name is Shakhor Smith and I'm a self-taught developer. I'm currently living in Atlanta, GA, but I'm from Ft. Lauderdale, FL.🌴I like to build new projects with JavaScript and also share what I've learned throughout my career as a developer to other people. Outside of programming I like to travel, hike, play with my dogs, read, learn a new skill, and do anything adventurous.</p>

    <h2>Workflow</h2>
    <dl>
      <dt>Computer</dt>
      <dd>Macbook Pro 13' 2017</dd>

      <dt>Technologies 👨🏾‍💻</dt>
      <dd>JavaScript • React • Redux • Apollo • Node • Express • Ruby on Rails • GraphQL • MongoDB</dd>

      <dt>Interests</dt>
      <dd>Python • Blockchain • AI</dd>

      <dt>Editor</dt>
      <dd>VSCode</dd>

      <h2>Hobbies</h2>
      <HobbyList>
        <li>Dogs</li>
        <li>Riding dirt bikes</li>
        <li>Hiking</li>
        <li>Traveling</li>
        <li>Anything adventourous..</li>
        <li>✅ Skydiving</li>
      </HobbyList>

      <h2>Projects</h2>
      <p>Coming soon...</p>
    </dl>
  </Layout>
)

const HobbyList = styled.ul`
  list-style: none;
  margin: 0;
`

export default About
