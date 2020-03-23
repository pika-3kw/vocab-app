import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Button, TextField, Paper } from '@material-ui/core';

import { teal } from '@material-ui/core/colors';

const myStyles = makeStyles({
  root: {
    maxWidth: 600,
    padding: 30,
    margin: 'auto',
    position: 'relative',
    top: '50%',
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

const SignUp = () => {
  const classes = myStyles();
  return (
    <Paper className={classes.root}>
      <form>
        <TextField label='First Name' type='text' name='first-name' />

        <TextField label='Last Name' type='text' name='first-name' />

        <TextField label='Email' type='email' name='email' />

        <TextField label='Password' type='password' name='password' />

        <TextField
          label='Confirm Password'
          type='password'
          name='confirm-password'
        />

        <div className={classes.formAction}>
          <Button variant='contained' className={classes.submitButton}>
            Sign Up
          </Button>

          <span>
            {' '}
            Or{' '}
            <Link to='/signin' className={classes.link}>
              Signin
            </Link>
          </span>
        </div>
      </form>
    </Paper>
  );
};

export default SignUp;
