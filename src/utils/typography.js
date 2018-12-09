import Typography from 'typography'
import twinPeaksTheme from 'typography-theme-twin-peaks'
import { themes } from '../theme/globalStyles'

twinPeaksTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'body': {
    backgroundImage: themes.main.background
  },
  'a': {
    color: themes.main.secondary,
    textShadow: 'none',
    backgroundImage: 'none',
  },
  'h2, h3, h4, h5': {
    color: themes.main.title,
  },
  'dd, li, p': {
    color: themes.main.contentColor,
  }
})

const typography = new Typography(twinPeaksTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
