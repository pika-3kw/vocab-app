import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Button, TextField, Paper } from '@material-ui/core';

import { teal, red } from '@material-ui/core/colors';

import firebase from '../../firebase';

const myStyles = makeStyles({
  root: {
    maxWidth: 600,
    padding: 30,
    margin: 'auto',
    '& .MuiTextField-root': {
      width: '100%'
    }
  },
  error: {
    '& .MuiFormHelperText-root': {
      color: red[500]
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: red[500]
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: red[500]
    },
    '& .MuiInputLabel-root': {
      color: red[500]
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

  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errorInput, setErrorInput] = useState({
    firstName: ' ',
    lastName: ' ',
    email: ' ',
    password: ' ',
    confirmPassword: ' '
  });

  const handleChange = event => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(formInput.email, formInput.password)
      .then(createdUser => {
        console.log(createdUser);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit}>
        <TextField
          label='First Name'
          value={formInput.firstName}
          type='text'
          name='firstName'
          onChange={handleChange}
          helperText={errorInput.firstName}
          className={errorInput.firstName !== ' ' ? classes.error : ''}
        />

        <TextField
          label='Last Name'
          value={formInput.lastName}
          type='text'
          name='lastName'
          onChange={handleChange}
          helperText={errorInput.lastName}
          className={errorInput.lastName !== ' ' ? classes.error : ''}
        />

        <TextField
          label='Email'
          value={formInput.email}
          type='email'
          name='email'
          onChange={handleChange}
          helperText={errorInput.email}
          className={errorInput.email !== ' ' ? classes.error : ''}
        />

        <TextField
          label='Password'
          value={formInput.password}
          type='password'
          name='password'
          onChange={handleChange}
          helperText={errorInput.password}
          className={errorInput.password !== ' ' ? classes.error : ''}
        />

        <TextField
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          value={formInput.confirmPassword}
          onChange={handleChange}
          helperText={errorInput.confirmPassword}
          className={errorInput.confirmPassword !== ' ' ? classes.error : ''}
        />

        <div className={classes.formAction}>
          <Button
            type='submit'
            variant='contained'
            className={classes.submitButton}
          >
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
