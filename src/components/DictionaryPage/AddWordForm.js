import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { makeStyles, Button, TextField, Paper } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { teal, red } from '@material-ui/core/colors';

import firebase from '../../firebase';

const myStyles = makeStyles({
  root: {
    maxWidth: 600,
    padding: 30,
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 100,
    marginTop: '70px',
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
    margin: 'auto 10px',
    color: '#FFF',
    '&:hover': {
      backgroundColor: teal[400],
    },
  },
  cancelButton: {
    backgroundColor: red[500],
    margin: 'auto 10px',
    color: '#FFF',
    '&:hover': {
      backgroundColor: red[400],
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

const AddWordForm = ({ handleCancel, setDictionary, dictionary }) => {
  const classes = myStyles();

  const initForm = {
    word: '',
    mean: '',
    phonetic: '',
    wclass: '',
  };

  const [formInput, setFormInput] = useState(initForm);

  const currentUser = useSelector((state) => state.currentUser);

  const wordsRef = firebase.database().ref('words');

  const [errorMessages, setErrorMessages] = useState([]);

  const handleChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid(formInput)) {
      return false;
    }

    const key = wordsRef.push().key;

    const newWord = {
      ...formInput,
      id: key,
      createBy: currentUser.uid,
    };

    wordsRef
      .child(key)
      .update(newWord)
      .then(() => {
        setFormInput(initForm);
        setDictionary([...dictionary, newWord]);
      })
      .catch((error) => console.log(error));
  };

  const formIsValid = (formInput) => {
    let errors = [];
    if (formInput.word.length === 0) {
      errors.push('Cần nhập trường Word');
    }

    if (formInput.mean.length === 0) {
      errors.push('Cần nhập trường Mean');
    }

    if (errors.length !== 0) {
      setErrorMessages(errors);
      return false;
    }

    return true;
  };

  return (
    <Paper className={classes.root}>
      {errorMessages.map((error, index) => (
        <Alert key={index} style={{ marginTop: '5px' }} severity='error'>
          {error}
        </Alert>
      ))}

      <form onSubmit={handleSubmit} className={classes.form} autoComplete='off'>
        <TextField
          label='Word'
          value={formInput.word}
          type='text'
          name='word'
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />

        <TextField
          label='Mean'
          value={formInput.mean}
          type='text'
          name='mean'
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />

        <TextField
          label='Phonetic'
          value={formInput.phonetic}
          type='text'
          name='phonetic'
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />

        <TextField
          label='Word Class'
          type='text'
          name='wclass'
          value={formInput.wclass}
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />

        <div className={classes.formAction}>
          <Button
            type='submit'
            variant='contained'
            className={classes.submitButton}
          >
            Add
          </Button>

          <Button
            type='button'
            variant='contained'
            className={classes.cancelButton}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default AddWordForm;
