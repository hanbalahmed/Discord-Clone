import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX4AKL_WX7QDkvZVIw8ZoGAq1p_Iq8jms",
  authDomain: "discord-clone-hanbalahmed.firebaseapp.com",
  databaseURL: "https://discord-clone-hanbalahmed.firebaseio.com",
  projectId: "discord-clone-hanbalahmed",
  storageBucket: "discord-clone-hanbalahmed.appspot.com",
  messagingSenderId: "993878156808",
  appId: "1:993878156808:web:a8870fc5c9d299983193bd",
  measurementId: "G-P6RRH1DRZF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
