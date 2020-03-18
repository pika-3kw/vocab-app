import React from 'react';

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
    width: '100%',
    bottom: 0,
    position: 'fixed'
  }
});

const BottomBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
      />

      <BottomNavigationAction
        label='Today'
        icon={<TodayIcon />}
        component={MyLink}
        to='/today'
      />

      <BottomNavigationAction
        label='Dictionary'
        icon={<ListIcon />}
        component={MyLink}
        to='/dictionary'
      />

      <BottomNavigationAction
        label='User'
        icon={<PersonIcon />}
        component={MyLink}
        to='/user'
      />
    </BottomNavigation>
  );
};

export default BottomBar;
