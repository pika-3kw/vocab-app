import React from 'react';

import { makeStyles, Fab } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';

const myStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
    position: 'fixed',
    bottom: 70,
    left: '50%',
    transform: 'translateX(-50%)',
    transition: '0.5s',
    '&.hidden': {
      bottom: '-70px'
    }
  },
  addIcon: {
    color: '#ecf0f1',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[800]
    }
  }
}));

const DictionaryActions = ({ hidden }) => {
  const classes = myStyles();

  return (
    <div className={`${classes.root} ${hidden ? 'hidden' : ''}`}>
      <Fab className={classes.addIcon}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default DictionaryActions;
