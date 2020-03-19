import React, { useState } from 'react';
import {
  TextField,
  Button,
  makeStyles,
  FormControl,
  Modal
} from '@material-ui/core';

const myStyle = makeStyles(theme => ({
  form: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'flex-end',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      flexDirection: 'column'
    }
  },
  paper: {
    position: 'absolute',
    width: 275,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%'
  }
}));

const AnswerForm = ({ toogleModalState, isModalOpen }) => {
  const classes = myStyle();

  const [inputValue, setInputValue] = useState('');

  const check = event => {
    event.preventDefault();
    console.log(inputValue);
  };

  const updateSubmit = event => {
    setInputValue(event.target.value);
  };

  return (
    <Modal
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      open={isModalOpen}
      onClose={toogleModalState}
    >
      <div
        className={classes.paper}
        style={{ transform: `translate(-50%, -50%)` }}
      >
        <form className={classes.form} onSubmit={check}>
          <FormControl style={{ margin: '5px' }}>
            <TextField
              label='Answer'
              value={inputValue}
              onChange={updateSubmit}
            />
          </FormControl>
          <FormControl style={{ margin: '5px' }}>
            <Button variant='contained' onClick={check}>
              Answer
            </Button>
          </FormControl>
        </form>
      </div>
    </Modal>
  );
};

export default AnswerForm;
