import React, { useState } from 'react';

import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';

import WordDetail from './WordDetail';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxHeight: '100%'
  },
  container: {
    maxHeight: '100%'
  }
});

const columns = [
  { id: 'word', label: 'Word' },
  { id: 'mean', label: 'Mean' }
];

const rows = [
  {
    score: 100,
    id: Math.random(),
    word: 'forbidden',
    mean: 'bị cấm',
    wclass: 'adjective',
    phonetic: '/fərˈbɪdn//'
  },
  {
    score: 100,
    id: Math.random(),
    word: 'test',
    mean: 'kiểm tra',
    wclass: 'noun',
    phonetic: '/test/'
  },
  {
    score: 100,
    id: Math.random(),
    word: 'congratulatory',
    mean: 'chúc mừng',
    wclass: 'adjective',
    phonetic: '/kənˌɡrætʃəˈleɪtəri/'
  },
  {
    score: 100,
    id: Math.random(),
    word: 'flat',
    mean: 'bằng phẳng',
    wclass: 'noun',
    phonetic: '/flæt/'
  }
];

const DictionaryPage = data => {
  const classes = useStyles();

  const [cardData, setCardData] = useState(null);

  const openModal = data => {
    setCardData(data);
  };
  const closeModal = () => {
    setCardData(null);
  };

  const createModal = data => (
    <WordDetail closeModal={closeModal} data={data} />
  );

  const createTableHeader = () =>
    columns.map(column => (
      <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
        {column.label}
      </TableCell>
    ));

  const createTableRows = () =>
    rows.map((row, i) => (
      <TableRow
        hover
        role='checkbox'
        tabIndex={-1}
        key={i}
        onClick={() => openModal(row)}
      >
        {columns.map(column => {
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
      </Paper>
      {cardData ? createModal(cardData) : null}
    </>
  );
};

export default DictionaryPage;
