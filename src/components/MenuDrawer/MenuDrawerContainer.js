import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuDrawer from './MenuDrawer';

const MenuDrawerContainer = ({ toggleMenuDrawer, isMenuOpen }) => {
  const isDarkTheme = useSelector(state => state.app.isDarkTheme);

  const dispatch = useDispatch();

  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });

  return (
    <MenuDrawer
      isDarkTheme={isDarkTheme}
      toggleTheme={toggleTheme}
      toggleMenuDrawer={toggleMenuDrawer}
      isMenuOpen={isMenuOpen}
    />
  );
};

export default MenuDrawerContainer;
