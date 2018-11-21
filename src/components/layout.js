import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import Header from './Header/index'
import { ThemeContext } from '../contexts/ThemeContext'

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
          ]}
        >
          <html lang="en" />
        </Helmet>

          <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
              <ThemeProvider theme={theme}>
                <Wrapper>
                  <GlobalStyle />
                  <Header
                    menuLinks={data.site.siteMetadata.menuLinks}
                    siteTitle={data.site.siteMetadata.title}
                    toggleTheme={toggleTheme}
                  />
                  {children}
                </Wrapper>
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
      </>
    )}
  />
)

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${ props => props.theme.background };
  }

  h2, h3, h4, h5 {
    color: ${ props => props.theme.title };
  } 

  dd, li, p {
    color: ${ props => props.theme.contentColor };
  }

  a {
    color: ${ props => props.theme.secondary }; 
    text-shadow: none;
    background-image: none;

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
