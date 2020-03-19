import React, { useState } from 'react';

import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  CardActionArea
} from '@material-ui/core';

import AnswerForm from './AnswerForm';

const useStyles = makeStyles(theme => ({
  root: {
    width: 275,
    margin: '10px auto',
    textAlign: 'center'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));

const WordCard = ({ data }) => {
  const [isModalOpen, setModalState] = useState(false);

  const classes = useStyles();
  const toogleModalState = () => setModalState(!isModalOpen);

  return (
    <div className={classes.WordCard}>
      <Card className={classes.root} onClick={toogleModalState}>
        <CardActionArea>
          <CardContent>
            <Typography variant='h5'>
              {data.type === 'en' ? data.word : data.mean}
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              {data.wclass}
            </Typography>
            <Typography variant='h6' color='textSecondary'>
              {data.type === 'en' ? data.phonetic : <span>&nbsp;</span>}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <AnswerForm
        isModalOpen={isModalOpen}
        toogleModalState={toogleModalState}
      />
    </div>
  );
};

export default WordCard;
