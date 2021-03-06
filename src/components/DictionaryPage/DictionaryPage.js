import React, { useState, useEffect } from 'react';

import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import WordDetail from './WordDetail';
import DictionaryActions from './DictionaryActions';
import AddWordForm from './AddWordForm';

import firebase from '../../firebase';
const wordsRef = firebase.database().ref('words');

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxHeight: '100%',
  },
  container: {
    maxHeight: 'calc(100vh - 135px)',
  },
});

const columns = [
  { id: 'word', label: 'Word' },
  { id: 'mean', label: 'Mean' },
];

const DictionaryPage = (data) => {
  const classes = useStyles();

  const [cardData, setCardData] = useState(null);

  const [formState, setFormState] = useState(false);

  const [dictionary, setDictionary] = useState([]);

  useEffect(() => {
    wordsRef.once('value', (snap) => {
      if (!snap) return;
      setDictionary(Object.values(snap.val()));
    });
  }, []);

  const clickAddButton = () => {
    setFormState(!formState);
  };

  const handleCancel = () => {
    setFormState(false);
  };

  const openModal = (data) => {
    setCardData(data);
  };
  const closeModal = () => {
    setCardData(null);
  };

  const createModal = (data) => (
    <WordDetail closeModal={closeModal} data={data} />
  );

  const createTableHeader = () =>
    columns.map((column) => (
      <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
        {column.label}
      </TableCell>
    ));

  const createTableRows = () =>
    dictionary.map((row, i) => (
      <TableRow
        hover
        role='checkbox'
        tabIndex={-1}
        key={i}
        onClick={() => openModal(row)}
      >
        {columns.map((column) => {
          const value = row[column.id];
          return (
            <TableCell key={column.id} align={column.align}>
              {value}
            </TableCell>
          );
        })}
      </TableRow>
    ));

  return (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>{createTableHeader()}</TableRow>
            </TableHead>
            <TableBody>{createTableRows()}</TableBody>
          </Table>
        </TableContainer>
        <DictionaryActions hidden={cardData} clickAddButton={clickAddButton} />
      </Paper>
      {cardData ? createModal(cardData) : null}
      {formState ? (
        <AddWordForm
          handleCancel={handleCancel}
          setDictionary={setDictionary}
          dictionary={dictionary}
        />
      ) : null}
    </>
  );
};

export default DictionaryPage;
