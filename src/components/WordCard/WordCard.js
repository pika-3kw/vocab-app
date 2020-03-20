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

const WordCard = React.forwardRef(({ data }, ref) => {
  const [isModalOpen, setModalState] = useState(false);

  const classes = useStyles();
  const toggleModalState = () => setModalState(!isModalOpen);

  return (
    <div className={classes.WordCard}>
      <Card className={classes.root} onClick={toggleModalState}>
        <CardActionArea>
          <CardContent>
            <Typography variant='h5'>
              {data.type === 'vi' ? data.mean : data.word}
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              {data.wclass}
            </Typography>
            {data.type === undefined ? (
              <Typography className={classes.pos} color='textSecondary'>
                <span>score: </span>
                {data.score}
              </Typography>
            ) : null}
            <Typography variant='h6' color='textSecondary'>
              {data.type === 'vi' ? <span>&nbsp;</span> : data.phonetic}
            </Typography>
            <Typography variant='h5'>
              {data.type === undefined ? data.mean : ' '}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {data.type !== undefined ? (
        <AnswerForm
          isModalOpen={isModalOpen}
          toggleModalState={toggleModalState}
        />
      ) : null}
    </div>
  );
});

export default WordCard;
