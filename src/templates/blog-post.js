import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

import Layout from '../components/layout'
import { PageTitle } from '../components/shared/Text'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Helmet
        title={`Shakhor | ${ post.frontmatter.title }`}
        meta={[
          { name: 'description', content: 'Shakhor Smith | Software Engineer' },
          { name: 'keywords', content: 'shakhor, shakhor smith' },
        ]}
      />
      <GlobalStyle />
      <PageTitle blogPost>{post.frontmatter.title}</PageTitle>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

const GlobalStyle = createGlobalStyle`
  code {
    display: block;
  }

  img {
    display: block;
    margin: 10px auto;
  }
`
