import React from 'react';

import { useSelector } from 'react-redux';

import {
  makeStyles,
  Avatar,
  Card,
  CardContent,
  Typography,
  Link,
  Button,
} from '@material-ui/core';

import { red } from '@material-ui/core/colors';

import firebase from '../../firebase';

const myStyle = makeStyles({
  root: {
    textAlign: 'center',
    '& p button': {
      fontSize: '1rem',
      color: '#25CCF7',
    },
  },
  avatarCont: {
    paddingBottom: 0,
  },
  avatar: {
    position: 'relative',
    width: 200,
    height: 200,
    margin: 'auto',
    borderRadius: '50%',
    cursor: 'pointer',
    '&::after': {
      transition: '0.5s',
      content: '"Upload Photo"',
      position: 'absolute',
      bottom: 22,
      left: '50%',
      verticalAlign: 'bottom',
      color: '#FFF',
      fontSize: '1rem',
      transform: 'translateX(-50%)',
      opacity: 0,
    },

    '&::before': {
      content: '""',
      width: 202,
      height: 202,
      borderRadius: '50%',
      border: '8px solid #303030',
      position: 'absolute',
      zIndex: 0,
      opacity: 0,
      transition: '0.5s',
    },

    '&:hover::after': {
      opacity: 1,
    },

    '&:hover::before': {
      opacity: 0.3,
    },
  },
});

const UserPage = () => {
  const classes = myStyle();

  const currentUser = useSelector((state) => state.currentUser);

  const handleSignOutButton = () => {
    firebase
      .auth()
      .signOut()
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardContent className={classes.avatarCont}>
          <Avatar src={currentUser.photoURL} className={classes.avatar} />
        </CardContent>
        <CardContent>
          <Typography variant='h6'>{currentUser.displayName}</Typography>
          <Typography>E-mail: {currentUser.email}</Typography>
        </CardContent>
        <CardContent>
          <Typography>
            <Link component='button'>Change E-mail</Link>
          </Typography>
          <Typography>
            <Link component='button'>Change Password</Link>
          </Typography>
        </CardContent>
        <CardContent>
          <Typography>
            <Button
              variant='contained'
              style={{ color: '#FFF', backgroundColor: red[500] }}
              onClick={handleSignOutButton}
            >
              Sign Out
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserPage;
