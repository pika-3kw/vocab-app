import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BottomBar from '../BottomBar';
import DictionaryContainer from '../DictionaryPage';
import LearnPageContainer from '../LearnPage';
import TodayPage from '../TodayPage';
import TopBar from '../TopBar';
import UserPageContainer from '../UserPage';
import { SignUp, SignIn } from '../Auth';

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
          <DictionaryContainer />
        </Route>
        <Route path='/user'>
          <UserPageContainer />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
      </Switch>

      <BottomBar />
    </Router>
  );
};

export default App;
