import React from 'react';
import { themes } from '../theme/globalStyles';

export const ThemeContext = React.createContext();

export class PortfolioThemeProvider extends React.Component {
  state = {
    theme: themes.main
  };

  toggleTheme = () => this.setState(prevState => ({ theme: prevState.theme === themes.main ? themes.dark : themes.main }))

  render() {
    return <ThemeContext.Provider value={{
      ...this.state,
      toggleTheme: this.toggleTheme,
    }}>
      {this.props.children}
    </ThemeContext.Provider>
  }
}