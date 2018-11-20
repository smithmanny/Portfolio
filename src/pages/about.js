import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import { PageTitle, PageSubTitle } from '../components/shared/Text'

const About = () => (
  <Layout>
    <PageTitle>About Me</PageTitle>
    <PageSubTitle>Software Engineer 🚀</PageSubTitle>
    <p>Hi, my name is Shakhor Smith and I'm a Software Engineer. I'm currently living in Atlanta, GA, but I'm from Ft. Lauderdale, FL. I'm a self-taught developer and being self-taught I've come across a lot of roadblocks. Those roadblocks are the reason why I created this site. This site will be used to record my journey and also help everyone along the way by sharing my notes. If you prefer to watch videos instead I also post on youtube.</p>

    <h2>What I code with</h2>
    <dl>
      <dt>Computer</dt>
      <dd>Macbook Pro 13' 2017</dd>

      <dt>Technologies 👨🏾‍💻</dt>
      <dd>React • Redux • Apollo • Node • Express • Ruby on Rails • GraphQL • MongoDB</dd>

      <dt>Interests</dt>
      <dd>Python • Java • Blockchain • AI</dd>

      <dt>Editor</dt>
      <dd>VSCode</dd>

      <h2>Hobbies</h2>
      <HobbyList>
        <li>Dogs</li>
        <li>Riding dirt bikes</li>
        <li>Hiking</li>
        <li>Traveling</li>
        <li>Anything adventourous. Let's go skydiving!</li>
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
