import React from 'react'

import { PortfolioThemeProvider } from './src/contexts/ThemeContext'
require('prismjs/themes/prism-okaidia.css')

export const wrapRootElement = ({ element }) => {
  return (
    <PortfolioThemeProvider>
      {element}
    </PortfolioThemeProvider>
  )
}
