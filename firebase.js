import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_wbN0LCTnaAEo7x3KzT_aYBsEyW48Hyk",
  authDomain: "amzn-2-7ac94.firebaseapp.com",
  projectId: "amzn-2-7ac94",
  storageBucket: "amzn-2-7ac94.appspot.com",
  messagingSenderId: "214699392116",
  appId: "1:214699392116:web:855cccd8a4d8765772e521",
  measurementId: "G-407PXJF77B",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
    