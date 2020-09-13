import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjG827dov1D3ol0ZbQseJeMREvwuNqdfI",
  authDomain: "slack-chat-react-bb9c4.firebaseapp.com",
  databaseURL: "https://slack-chat-react-bb9c4.firebaseio.com",
  projectId: "slack-chat-react-bb9c4",
  storageBucket: "slack-chat-react-bb9c4.appspot.com",
  messagingSenderId: "897280984099",
  appId: "1:897280984099:web:932f01773b44ee75c05d96",
  measurementId: "G-RMR5P4CBDP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;