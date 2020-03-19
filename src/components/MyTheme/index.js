import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import { CssBaseline } from '@material-ui/core';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: teal
  }
});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: teal
  }
});

const MyTheme = ({ isDarkTheme, children }) => {
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MyTheme;
