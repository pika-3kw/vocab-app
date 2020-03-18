import React from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon
} from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  }
}));

const Topbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          VocabApp
        </Typography>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <Badge badgeContent={4} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
