import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHbcZA97-RkoGV1h4507gsujIcju1Wiys",
  authDomain: "clone-2f2ca.firebaseapp.com",
  projectId: "clone-2f2ca",
  storageBucket: "clone-2f2ca.appspot.com",
  messagingSenderId: "446583011293",
  appId: "1:446583011293:web:cec46c3290fb6acb23a834",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
