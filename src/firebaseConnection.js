import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyDEi4ok1nHIHdfEc0nbeQU2s_YB5SBIYtk",
    authDomain: "curso-udemy-c7caf.firebaseapp.com",
    projectId: "curso-udemy-c7caf",
    storageBucket: "curso-udemy-c7caf.appspot.com",
    messagingSenderId: "864432278984",
    appId: "1:864432278984:web:edb3b11c381c31ba9584fd",
    measurementId: "G-TFZN0LYEZ1"
  };
  
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;