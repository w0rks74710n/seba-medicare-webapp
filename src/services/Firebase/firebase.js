import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyC0YovggdUrzBl-5ACqrUvxRkYJ-Pwxluk",
  authDomain: "medicare.firebaseapp.com",
  databaseURL: "https://medicare.firebaseio.com",
  projectId: "medicare-1aad6",
  storageBucket: '',
  messagingSenderId: "1022457139691",
};

const devConfig = {
  apiKey: "AIzaSyC0YovggdUrzBl-5ACqrUvxRkYJ-Pwxluk",
  authDomain: "medicare.firebaseapp.com",
  databaseURL: "https://medicare.firebaseio.com",
  projectId: "medicare-1aad6",
  storageBucket: '',
  messagingSenderId: "1022457139691",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};