import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../containers/Layout'
import Posts from '../components/shared/Posts'
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
            next {
              frontmatter {
                title
                date
                slug
              }
            }
            previous {
              frontmatter {
                title
                date
                slug
              }
            }
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
