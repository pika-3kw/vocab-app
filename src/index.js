import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import { CssBaseline } from '@material-ui/core';

import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';

import rootReducer from './reducers/';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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

const Root = () => {
  const isDarkTheme = useSelector(state => state.app.isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
