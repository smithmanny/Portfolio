import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Posts from '../components/Posts'
import { PageTitle } from '../components/shared/Text'

const Blog = () => (
  <Layout>
    <PageTitle>Blog</PageTitle>
    <Posts />
  </Layout>
)

export default Blog
