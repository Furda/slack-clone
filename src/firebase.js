import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARPD2UZAtL5ng2ylv3nkm0PYRXCLyLyS4",
  authDomain: "slack-clone-ea7de.firebaseapp.com",
  projectId: "slack-clone-ea7de",
  storageBucket: "slack-clone-ea7de.appspot.com",
  messagingSenderId: "265420108663",
  appId: "1:265420108663:web:b1f6fd4a50a346790d2772",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
