import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDXFXVYCirwgTnUIW98wMF5s52bI6AahDo",
    authDomain: "foodtracker-4c72f.firebaseapp.com",
    databaseURL: "https://foodtracker-4c72f.firebaseio.com",
    storageBucket: "foodtracker-4c72f.appspot.com",
    messagingSenderId: "23826452842"
  };
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const fireApp = firebaseApp.database();
 export default fireApp
