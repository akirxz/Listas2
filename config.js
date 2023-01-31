import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyD8tUcbjcR6lSxyD_Sp4BzQDXNyuLpera8",
    authDomain: "listas-42a45.firebaseapp.com",
    projectId: "listas-42a45",
    storageBucket: "listas-42a45.appspot.com",
    messagingSenderId: "134477842487",
    appId: "1:134477842487:web:f22f1cdc395ef107df17b2"
  };
firebase.initializeApp(firebaseConfig)
const database = firebase.firestore()
export default database 