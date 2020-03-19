import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BottomBar from '../BottomBar';
import DictionaryPage from '../DictionaryPage';
import LearnPageContainer from '../LearnPage';
import TodayPage from '../TodayPage';
import TopBar from '../TopBar';
import UserPage from '../UserPage';

const App = () => {
  return (
    <Router>
      <TopBar />

      <Switch>
        <Route exact path='/'>
          <LearnPageContainer />
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
