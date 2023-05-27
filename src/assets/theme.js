import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2861F3',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#161B22',
      paper: '#1E1E1E',
    },
    divider: '#2861f3',
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: '#cee0ff',
      disabled: 'rgba(105,105,105,0.38)',
      hint: '#27538e',
    }
  },
});

export default theme;