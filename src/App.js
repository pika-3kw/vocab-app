import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import {
  BottomBar,
  LearnPage,
  TopBar,
  DictionaryPage,
  TodayPage,
  UserPage
} from './components';

const App = () => {
  return (
    <Router>
      <TopBar />

      <Switch>
        <Route exact path='/'>
          <LearnPage />
        </Route>
        <Route path='/today'>
          <TodayPage />
        </Route>
        <Route path='/dictionary'>
          <DictionaryPage />
        </Route>
        <Route path='/User'>
          <UserPage />
        </Route>
      </Switch>

      <BottomBar />
    </Router>
  );
};

export default App;
