import React from "react"
import { PortfolioThemeProvider } from './src/contexts/ThemeContext';

export const wrapRootElement = ({ element }) => {
  return (
    <PortfolioThemeProvider>
      {element}
    </PortfolioThemeProvider>
  )
}