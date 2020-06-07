import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCL30amNKPKBcEodehs3zGMTno6m5jXsJA",
    authDomain: "criarh-project.firebaseapp.com",
    databaseURL: "https://criarh-project.firebaseio.com",
    projectId: "criarh-project",
    storageBucket: "criarh-project.appspot.com",
    messagingSenderId: "719235040908",
    appId: "1:719235040908:web:aa2b68dbeb692637329da9",
    measurementId: "G-WZFXELHP2H"
  };

  //firebase.initializeApp(firebaseConfig);
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;