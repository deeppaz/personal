import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBX9cx53NkL0Q8rqBABpK50WZJNBlQbu5U",
  authDomain: "puure-30a87.firebaseapp.com",
  databaseURL: "https://puure-30a87.firebaseio.com",
  projectId: "puure-30a87",
  storageBucket: "puure-30a87.appspot.com",
  messagingSenderId: "5497843853",
  appId: "1:5497843853:web:fbe8a6d0503a97730d32c4"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

const fire = firebase;
export default fire;