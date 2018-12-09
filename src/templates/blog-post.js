import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

import Layout from '../components/layout'
import { PageTitle } from '../components/shared/Text'

class BlogPost extends React.Component {
  componentDidMount () {
    if (typeof twttr.widgets !== 'undefined') {
      twttr.widgets.load()
    }
  }

  render () {
    const post = this.props.data.markdownRemark

    return (
      <Layout>
        <Helmet
          title={`Shakhor | ${ post.frontmatter.title }`}
          meta={[
            { name: 'description', content: post.frontmatter.title },
            { name: 'keywords', content: 'shakhor, shakhor smith' },
            { property: 'og:title', content: `${ post.frontmatter.title } | Shakhor Smith` },
            { property: 'og:url', content: `https://shakhorsmith.com/blog/${ post.frontmatter.slug }` },
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
            data-url={`https://shakhorsmith.com/blog/${ post.frontmatter.slug }`}
            data-hashtags="CodeNewbie,100DaysOfCode,WebDev"
            data-via="smithmanny"
            data-related="smithmanny,react,codenewbie,javascript">
            Tweet
          </a>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
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
