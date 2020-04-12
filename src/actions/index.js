import * as actionTypes from './type';

/**
 * App Actions
 */

export const toggleTheme = () => {
  return {
    type: actionTypes.TOGGLE_THEME
  };
};

/**
 * User actions
 */

export const setUser = info => {
  return {
    type: actionTypes.SET_USER,
    info
  };
};
