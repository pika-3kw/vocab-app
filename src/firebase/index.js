import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCeefc4jebXwgYM7MClnDUkLUsOS7D9U2s',
  authDomain: 'vocab-app-pika.firebaseapp.com',
  databaseURL: 'https://vocab-app-pika.firebaseio.com',
  projectId: 'vocab-app-pika',
  storageBucket: 'vocab-app-pika.appspot.com',
  messagingSenderId: '258913402435',
  appId: '1:258913402435:web:c99a33a4c0300c1c7fdef6',
  measurementId: 'G-TT0WZ69LC6'
};

firebase.initializeApp(config);

export default firebase;
