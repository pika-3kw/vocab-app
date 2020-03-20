import React, { useState } from 'react';
import { makeStyles, Modal } from '@material-ui/core';

import WordCard from '../WordCard/';
import WordActions from './WordActions';

const myStyles = makeStyles({
  root: {
    margin: '70px auto'
  }
});

const WordDetail = ({ data, closeModal }) => {
  const classes = myStyles();

  return (
    <Modal
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      open={data ? true : false}
      onClose={closeModal}
      className={classes.root}
    >
      <>
        <WordCard data={data} />
        <WordActions />
      </>
    </Modal>
  );
};

export default WordDetail;
