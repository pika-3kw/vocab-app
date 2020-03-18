import { combineReducers } from 'redux';
import * as actionTypes from '../actions/type';

const initApp = {
  isDarkTheme: true
};

const app_reducer = (state = initApp, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: app_reducer
});

export default rootReducer;
