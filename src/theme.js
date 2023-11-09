import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textTertiary: '#ffffff',
    error: '#d73a4a',
    primary: '#0366d6',
    white: 'white',
  },
  backgroundColors: {
    darkBackgroundColor: '#24292e',
    lightBackgroundColor: '#e1e4e8',
    primary: '#0366d6',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    ...Platform.select({
      ios: {
        main: 'Arial',
      },
      android: {
        main: 'Roboto',
      },
      default: {
        main: 'System',
      },
    }),

  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;