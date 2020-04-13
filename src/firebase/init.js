import firebase from 'firebase'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDTGbN1SIhI0YgHCyxFV329zpp94hpQjxU",
    authDomain: "playground-b1a49.firebaseapp.com",
    databaseURL: "https://playground-b1a49.firebaseio.com",
    projectId: "playground-b1a49",
    storageBucket: "playground-b1a49.appspot.com",
    messagingSenderId: "831142342094",
    appId: "1:831142342094:web:7bd57909daf336e70a0f9f",
    measurementId: "G-ZFQ17NBJ2C"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebaseApp.firestore()