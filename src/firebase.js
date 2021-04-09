import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6E-wkbsiXczCZMEVqvxxAhUiBgSrTAfI",
    authDomain: "vmhelperlog.firebaseapp.com",
    databaseURL: "https://vmhelperlog.firebaseio.com",
    projectId: "vmhelperlog",
    storageBucket: "vmhelperlog.appspot.com",
    messagingSenderId: "713947401210",
    appId: "1:713947401210:web:0da4b2aaeb10caaabcf243",
    measurementId: "G-WHRRCSBWSR"    
});

const db = firebaseApp.firestore();

export { db };
