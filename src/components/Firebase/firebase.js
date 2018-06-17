import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "API Key",
  authDomain: "Authontication Domain",
  databaseURL: "Database URL",
  projectId: "Project ID",
  storageBucket: '',
  messagingSenderId: "Message Sender ID",
};

const devConfig = {
  apiKey: "API Key",
  authDomain: "Authontication Domain",
  databaseURL: "Database URL",
  projectId: "Project ID",
  storageBucket: '',
  messagingSenderId: "Message Sender ID",
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