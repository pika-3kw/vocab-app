import React, { useState } from 'react';

import { makeStyles, Button, TextField, Paper } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { teal } from '@material-ui/core/colors';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import firebase from '../../firebase';

const myStyles = makeStyles({
  root: {
    maxWidth: 600,
    padding: 30,
    margin: 'auto',
    top: '50%',
    position: 'relative',
    transform: 'translateY(-50%)',
    '& .MuiTextField-root': {
      width: '100%',
    },
  },
  form: { margin: '10px auto' },
  formAction: {
    margin: '20px 0',
  },
  submitButton: {
    backgroundColor: teal[500],
    color: '#FFF',
    '&:hover': {
      backgroundColor: teal[400],
    },
  },
  link: {
    fontSize: '1rem',
    textDecoration: 'none',
    color: teal[300],
    '&:hover': {
      color: teal[500],
      textDecoration: 'underline',
    },
  },
});

const SignIn = () => {
  const classes = myStyles();

  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  });

  const [errorMessages, setErrorMessages] = useState([]);

  const handleChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formInput;

    setErrorMessages([]);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userLogged) => {})
      .catch((err) => {
        console.log(err);
        setErrorMessages([...errorMessages, err.message]);
      });
  };

  return (
    <Paper className={classes.root}>
      {errorMessages.map((error, i) => (
        <Alert style={{ marginTop: '5px' }} key={i} severity='error'>
          {error}
        </Alert>
      ))}

      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          label='Email'
          value={formInput.email}
          type='email'
          name='email'
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />

        <TextField
          label='Password'
          value={formInput.password}
          type='password'
          name='password'
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />

        <div className={classes.formAction}>
          <Button
            variant='contained'
            type='submit'
            className={classes.submitButton}
          >
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
