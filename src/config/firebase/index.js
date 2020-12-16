import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBHvVT90Kg0mcmoLUbRPVOpZ5j-MRUcpHQ",
    authDomain: "reactjs-try-with-firebase.firebaseapp.com",
    projectId: "reactjs-try-with-firebase",
    storageBucket: "reactjs-try-with-firebase.appspot.com",
    messagingSenderId: "525254549542",
    appId: "1:525254549542:web:db9c523cdfaf994a0246e7",
    measurementId: "G-PXMH87GXW2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const database = firebase.database();

export default firebase;