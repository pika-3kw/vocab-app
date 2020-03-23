import React from 'react';

import { makeStyles, Button, TextField, Paper } from '@material-ui/core';

import { teal } from '@material-ui/core/colors';

import { Link } from 'react-router-dom';

const myStyles = makeStyles({
  root: {
    maxWidth: 600,
    padding: 30,
    margin: 'auto',
    top: '50%',
    position: 'relative',
    transform: 'translateY(-50%)',
    '& .MuiTextField-root': {
      width: '100%'
    }
  },
  formAction: {
    margin: '20px 0'
  },
  submitButton: {
    backgroundColor: teal[500],
    color: '#FFF',
    '&:hover': {
      backgroundColor: teal[400]
    }
  },
  link: {
    color: '#FFF',
    fontSize: '1rem',
    textDecoration: 'none',
    color: teal[300],
    '&:hover': {
      color: teal[500],
      textDecoration: 'underline'
    }
  }
});

const SignIn = () => {
  const classes = myStyles();
  return (
    <Paper className={classes.root}>
      <form>
        <TextField label='Email' type='email' name='email' />

        <TextField label='Password' type='password' name='password' />

        <div className={classes.formAction}>
          <Button variant='contained' className={classes.submitButton}>
            Sign In
          </Button>
          <span>
            {' '}
            Or{' '}
            <Link to='/signup' className={classes.link}>
              Signup
            </Link>
          </span>
        </div>
      </form>
    </Paper>
  );
};

export default SignIn;
