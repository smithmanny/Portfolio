import React from 'react';
import { themes } from '../theme/globalStyles';

export const ThemeContext = React.createContext();

export class PortfolioThemeProvider extends React.Component {
  state = {
    theme: themes['main']
  };

  render() {
    return <ThemeContext.Provider value={{
      ...this.state,
    }}>
      {this.props.children}
    </ThemeContext.Provider>
  }
}