import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""
  };
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const fireApp = firebaseApp.database();
 export default fireApp
