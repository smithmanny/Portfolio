import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Posts from '../components/Posts'
import { PageTitle } from '../components/shared/Text'

const Blog = ({ data }) => (
  <Layout>
    <PageTitle>Blog</PageTitle>
    <Posts posts={data.allMarkdownRemark.edges} />
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

export default Blog
