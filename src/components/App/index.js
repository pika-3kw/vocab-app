import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import BottomBar from '../BottomBar';
import DictionaryContainer from '../DictionaryPage';
import LearnPageContainer from '../LearnPage';
import TodayPage from '../TodayPage';
import TopBar from '../TopBar';
import UserPageContainer from '../UserPage';
import { SignUp, SignIn } from '../Auth';

import firebase from '../../firebase';

const wordsRef = firebase.database().ref('words');

const App = () => {
  const dispatch = useDispatch();
  const setUser = (info) => dispatch({ type: 'SET_USER', info });
  const setDictionary = (data) => dispatch({ type: 'SET_DICTIONARY', data });

  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    wordsRef.once('value', (snap) => {
      // if (!snap) return;
      setDictionary(Object.values(snap.val()));
    });
  }, []);

  return (
    <Router>
      <TopBar />

      <Switch>
        <Route exact path='/'>
          {currentUser ? (
            <LearnPageContainer />
          ) : (
            <Redirect to={{ pathname: '/signin' }} />
          )}
        </Route>
        <Route path='/today'>
          {currentUser ? (
            <TodayPage />
          ) : (
            <Redirect to={{ pathname: '/signin' }} />
          )}
        </Route>
        <Route path='/dictionary'>
          {currentUser ? (
            <DictionaryContainer />
          ) : (
            <Redirect to={{ pathname: '/signin' }} />
          )}
        </Route>
        <Route path='/user'>
          {currentUser ? (
            <UserPageContainer />
          ) : (
            <Redirect to={{ pathname: '/signin' }} />
          )}
        </Route>
        <Route path='/signup'>
          {!currentUser ? <SignUp /> : <Redirect to={{ pathname: '/user' }} />}
        </Route>
        <Route path='/signin'>
          {!currentUser ? <SignIn /> : <Redirect to={{ pathname: '/user' }} />}
        </Route>
      </Switch>

      <BottomBar />
    </Router>
  );
};

export default App;
