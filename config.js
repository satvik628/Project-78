import firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyAB8vQ9BUOL6D7x-Jgm3_VVQksiocYismE",
    authDomain: "barterapp-c76-90.firebaseapp.com",
    projectId: "barterapp-c76-90",
    storageBucket: "barterapp-c76-90.appspot.com",
    messagingSenderId: "217041267934",
    appId: "1:217041267934:web:4ff0eaec247cd81877264f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();