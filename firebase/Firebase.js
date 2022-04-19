// Import the functions you need from the SDKs you need
import firebase from 'firebase'
import 'firebase/firestore'
import auth from '@react-native-firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAAVxCA8XjkJSbZ6KU6CxCvfeTX1nMclDI",
  authDomain: "library-books-8a555.firebaseapp.com",
  projectId: "library-books-8a555",
  storageBucket: "library-books-8a555.appspot.com",
  messagingSenderId: "934969830302",
  appId: "1:934969830302:web:4df65c4de2ff0dd3d3c48f",
  measurementId: "G-HEP0P7QFEB"
};

// Initialize Firebase
if(!firebase.apps.length){
  const app =   firebase.initializeApp(firebaseConfig);
    }
    const db=firebase.firestore(app);
    export default db;
