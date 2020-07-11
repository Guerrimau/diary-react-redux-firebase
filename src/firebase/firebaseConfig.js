import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAgDq-FzlFV_nKZ39SF26j0l2Rz54bZ7Wc",
    authDomain: "journal-app-react-ab707.firebaseapp.com",
    databaseURL: "https://journal-app-react-ab707.firebaseio.com",
    projectId: "journal-app-react-ab707",
    storageBucket: "journal-app-react-ab707.appspot.com",
    messagingSenderId: "1068304548606",
    appId: "1:1068304548606:web:f7c6be2f0fd2d89a469baf"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}