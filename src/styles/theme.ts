export const theme = {
  colors: {
    primary: '#6200ea',
    secondary: '#03dac6',
    background: '#f6f6f6',
    surface: '#ffffff',
    error: '#b00020',
    text: {
      primary: '#000000',
      secondary: '#ffffff',
      disabled: '#a1a1a1',
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '16px',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
};