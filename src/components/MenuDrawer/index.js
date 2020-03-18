import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IconButton, Drawer, List, ListItem, Switch } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
    [theme.breakpoints.down('sm')]: {
      width: '100vw'
    }
  },
  drawerHead: {
    height: 48,
    [theme.breakpoints.up('sm')]: {
      height: 64
    },
    paddingLeft: 12,
    display: 'flex',
    alignItems: 'center'
  }
}));

const MenuDrawer = ({ toggleMenuDrawer, isMenuOpen }) => {
  const classes = useStyles();

  const isDarkTheme = useSelector(state => state.app.isDarkTheme);

  const dispatch = useDispatch();

  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });

  return (
    <Drawer anchor='left' open={isMenuOpen} onClick={() => toggleMenuDrawer()}>
      <div className={classes.drawerHead}>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </div>
      <List
        className={classes.list}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <ListItem button>
          <Switch
            checked={isDarkTheme}
            onChange={() => toggleTheme()}
            name='isDarkTheme'
            color='primary'
          />
          Dark theme
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MenuDrawer;
