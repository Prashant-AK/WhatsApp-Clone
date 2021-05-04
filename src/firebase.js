// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDL5Jxox4anJMqmnAeMLWv0jsKpbglZH8k",
  authDomain: "whatsappclone-95a30.firebaseapp.com",
  projectId: "whatsappclone-95a30",
  storageBucket: "whatsappclone-95a30.appspot.com",
  messagingSenderId: "787082603206",
  appId: "1:787082603206:web:35ef3421c39b21fdfac5c7",
  measurementId: "G-C86379YWX6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
