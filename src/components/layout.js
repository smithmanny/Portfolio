import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import Header from './header'
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
            {({ theme }) => (
              <ThemeProvider theme={theme}>
                <>
                <Header
                  menuLinks={data.site.siteMetadata.menuLinks}
                  siteTitle={data.site.siteMetadata.title}
                  theme={theme}
                />
                  <div
                    style={{
                      margin: '0 auto',
                      maxWidth: 960,
                      padding: '0px 1.0875rem 1.45rem',
                      paddingTop: 0,
                    }}
                  >
                    {children}
                  </div>
                </>
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
