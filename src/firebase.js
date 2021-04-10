import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyANJBhXrsPti-d34E5lQmYCDFk_BcwWVxQ",
    authDomain: "snapchat-clone-e09dc.firebaseapp.com",
    projectId: "snapchat-clone-e09dc",
    storageBucket: "snapchat-clone-e09dc.appspot.com",
    messagingSenderId: "362715167947",
    appId: "1:362715167947:web:7a4e75f7b343eac77c2f4e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };