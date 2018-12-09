import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import { themes } from '../theme/globalStyles'

import Header from './Header/index'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name 
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Shakhor Smith | Software Engineer' },
            { name: 'keywords', content: 'shakhor, shakhor smith' },
            { property: 'og:type', content: 'profile' },
            { property: 'og:title', content: 'Shakhor Smith | Software Enginner' },
            { property: 'og:site_name', content: 'Shakhor Smith | Software Engineer' },
            { property: 'og:url', content: 'https://shakhorsmith.com' },
            { property: 'profile:first_name', content: 'Shakhor' },
            { property: 'profile:last_name', content: 'Smith' },
          ]}
        >
          <html lang="en" />
        </Helmet>

          <ThemeProvider theme={themes.main}>
            <Wrapper>
              <GlobalStyle />
              <Header
                menuLinks={data.site.siteMetadata.menuLinks}
                siteTitle={data.site.siteMetadata.title}
              />
              {children}
            </Wrapper>
          </ThemeProvider>
      </>
    )}
  />
)

const GlobalStyle = createGlobalStyle`
  a {
    :hover {
      text-decoration: underline;
      color: ${ props => props.theme.secondary };
    }
  }
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
