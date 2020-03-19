import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider, useSelector } from 'react-redux';

import { store } from './store';
import MyTheme from './components/MyTheme';
import App from './components/App';

const Root = () => {
  const isDarkTheme = useSelector(state => state.app.isDarkTheme);

  return (
    <MyTheme isDarkTheme={isDarkTheme}>
      <App />
    </MyTheme>
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
