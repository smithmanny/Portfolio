import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Header from './Header/index';
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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

          <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
              <ThemeProvider theme={theme}>
                  <Wrapper>
                    <Header
                      menuLinks={data.site.siteMetadata.menuLinks}
                      siteTitle={data.site.siteMetadata.title}
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

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;

  background-color: ${props => props.theme.background};
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
