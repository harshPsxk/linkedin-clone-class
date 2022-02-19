import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApsZW5--t3LmA5QaP3EdKU5sFrL3Uff_w",
  authDomain: "linkedin-clone-class-8f5ce.firebaseapp.com",
  projectId: "linkedin-clone-class-8f5ce",
  storageBucket: "linkedin-clone-class-8f5ce.appspot.com",
  messagingSenderId: "1077571275617",
  appId: "1:1077571275617:web:1b7b29b14d34c7f9011320"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebaseApp.auth()


export {auth};
export default db;