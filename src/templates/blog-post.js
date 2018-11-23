import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

import Layout from '../components/layout'
import { PageTitle } from '../components/shared/Text'

export default ({ data, ...props }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Helmet
        title={`Shakhor | ${ post.frontmatter.title }`}
        meta={[
          { name: 'description', content: post.frontmatter.title },
          { name: 'keywords', content: 'shakhor, shakhor smith' },
          { property: 'og:title', content: post.frontmatter.title },
          { property: 'og:url', content: 'shakhor, shakhor smith' },
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
