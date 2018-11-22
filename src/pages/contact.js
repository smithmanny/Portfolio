import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import { PageTitle, PageSubTitle } from '../components/shared/Text'

const Contact = () => (
  <Layout>
    <PageTitle>Get In Touch</PageTitle>
    <PageSubTitle>Are you interested in working with me or just have a question?</PageSubTitle>
    <PageSubTitle>Email me at <a href="mailto:contact@shakhorsmith.com">contact@shakhorsmith.com</a></PageSubTitle>
  </Layout>
)

export default Contact
