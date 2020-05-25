import { combineReducers } from 'redux';
import * as actionTypes from '../actions/type';

const initApp = {
  isDarkTheme: true,
};

const app_reducer = (state = initApp, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    default:
      return state;
  }
};

const user_reducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return action.info;
    default:
      return state;
  }
};

const dictionary_reducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_DICTIONARY:
      return action.data;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: app_reducer,
  currentUser: user_reducer,
  dictionary: dictionary_reducer,
});

export default rootReducer;
