import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const config = {
  apiKey: 'AIzaSyA8Wn4kkzZhypiq5IOGX8Up7goBlI6BpJk',
  authDomain: 'fir-starter-ef20b.firebaseapp.com',
  databaseURL: 'https://fir-starter-ef20b.firebaseio.com',
  projectId: 'fir-starter-ef20b',
  storageBucket: 'fir-starter-ef20b.appspot.com',
  messagingSenderId: '95603777239',
  appId: '1:95603777239:web:73f445a41fdbfe68dc1a92',
  measurementId: 'G-K8QDD47KPM',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();
const ui = new firebaseui.auth.AuthUI(firebase.auth());

window.auth = auth;
window.db = db;
window.functions = functions;

export {
  firebase,
  ui,
  db,
  auth,
  functions,
};
