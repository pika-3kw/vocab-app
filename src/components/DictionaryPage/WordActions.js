import React from 'react';

import { makeStyles, IconButton, Fab } from '@material-ui/core';
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';
import { red, green } from '@material-ui/core/colors';

const myStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)'
  },
  editIcon: {
    color: '#ecf0f1',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[800]
    }
  },
  deleteIcon: {
    color: '#ecf0f1',
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[800]
    }
  }
}));

const WordActions = () => {
  const classes = myStyles();

  return (
    <div className={classes.root}>
      <Fab className={classes.editIcon}>
        <EditIcon />
      </Fab>

      <Fab className={classes.deleteIcon}>
        <DeleteIcon />
      </Fab>
    </div>
  );
};

export default WordActions;
