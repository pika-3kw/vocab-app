import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, Button, TextField, Paper } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { teal } from '@material-ui/core/colors';

import firebase from '../../firebase';

const myStyles = makeStyles({
  root: {
    maxWidth: 600,
    padding: 30,
    margin: 'auto',
    '& .MuiTextField-root': {
      width: '100%',
    },
  },
  form: { margin: '10px auto' },
  formAction: {
    margin: '20px 0',
  },
  textField: {
    marginBottom: 20,
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

const SignUp = () => {
  const classes = myStyles();

  const [formInput, setFormInput] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const userRef = firebase.database().ref('users');

  const [errorMessages, setErrorMessages] = useState([]);

  const handleChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = [];

    if (formInput.password !== formInput.confirmPassword) {
      errors.push('Vui lòng xác nhận lại mật khẩu.');
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(formInput.email, formInput.password)
      .then((createdUser) => {
        createdUser.user
          .updateProfile({
            displayName: formInput.fullName,
            photoURL: 'https://via.placeholder.com/200',
          })
          .then(() => {
            saveUser(createdUser).then(() => console.log('user saved'));
          })
          .catch((err) => console.log(err));
      })

      .catch((err) => {
        console.log('err', err);
        errors.push(err.message);
        setErrorMessages(errors);
      });
  };

  const saveUser = (createdUser) => {
    return userRef.child(createdUser.user.uid).set({
      fullName: createdUser.user.displayName,
      avatar: createdUser.user.photoURL,
    });
  };

  return (
    <Paper className={classes.root}>
      {errorMessages.map((error) => (
        <Alert style={{ marginTop: '5px' }} severity='error'>
          {error}
        </Alert>
      ))}

      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          label='Full Name'
          value={formInput.fullName}
          type='text'
          name='fullName'
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />

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

        <TextField
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          value={formInput.confirmPassword}
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
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
