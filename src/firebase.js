import firebase from 'firebase';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDE1640xNt7r_-GVE68scH4UGp0lcP8giM",
    authDomain: "twitter-clone-1006b.firebaseapp.com",
    projectId: "twitter-clone-1006b",
    storageBucket: "twitter-clone-1006b.appspot.com",
    messagingSenderId: "548846598856",
    appId: "1:548846598856:web:20f0d11c841f9c03e2c3fd",
    measurementId: "G-TG1H6XSGRS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;