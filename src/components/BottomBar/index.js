import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import {
  MenuBook as MenuBookIcon,
  Today as TodayIcon,
  List as ListIcon,
  PersonOutline as PersonIcon
} from '@material-ui/icons';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MyLink = styled(Link)({
  padding: 0
});

const useStyles = makeStyles({
  root: {
    bottom: 0,
    position: 'fixed',
    left: 0,
    right: 0,
    width: '100%',
    boxSizing: 'border-box'
  }
});

const BottomBar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(window.location.pathname);
  }, []);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label='Learn'
        icon={<MenuBookIcon />}
        component={MyLink}
        to='/'
        value='/'
      />

      <BottomNavigationAction
        label='Today'
        icon={<TodayIcon />}
        component={MyLink}
        to='/today'
        value='/today'
      />

      <BottomNavigationAction
        label='Dictionary'
        icon={<ListIcon />}
        component={MyLink}
        to='/dictionary'
        value='/dictionary'
      />

      <BottomNavigationAction
        label='User'
        icon={<PersonIcon />}
        component={MyLink}
        to='/user'
        value='/user'
      />
    </BottomNavigation>
  );
};

export default BottomBar;
