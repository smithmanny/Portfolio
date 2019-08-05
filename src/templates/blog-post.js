import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { createGlobalStyle } from 'styled-components'

import Layout from '../containers/Layout'
import { PageTitle } from '../components/shared/Text'

class BlogPost extends React.Component {
  componentDidMount () {
    if (typeof window.twttr.widgets !== 'undefined') {
      window.twttr.widgets.load()
    }
  }

  render () {
    const post = this.props.data.mdx

    return (
      <Layout>
        <Helmet
          title={`${ post.frontmatter.title } | Shakhor`}
          meta={[
            { name: 'description', content: `Check out this post ${ post.frontmatter.title } by Shakhor Smith.` },
            { property: 'og:title', content: `${ post.frontmatter.title } | Shakhor Smith` },
            { property: 'og:url', content: `https://shakhorsmith.com/blog/${ post.fields.slug }` },
          ]}
        />
        <GlobalStyle />
        <PageTitle blogPost>{post.frontmatter.title}</PageTitle>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0'
          }}
        >
          <a className="twitter-share-button"
            style={{ marginBottom: 0 }}
            href="https://twitter.com/intent/tweet"
            data-size="large"
            data-text={`${ post.frontmatter.title }`}
            data-url={`https://shakhorsmith.com/blog/${ post.fields.slug }`}
            data-hashtags="BlackTechTwitter,100DaysOfCode"
            data-via="smithmanny"
            data-related="coding,react,javascript">
            Tweet
          </a>
        </div>

        <MDXRenderer>
          {post.body}
        </MDXRenderer>
      </Layout>
    )
  }
}

export default BlogPost

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
      fields {
        slug
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
