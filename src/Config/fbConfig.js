
import * as firebase from 'firebase';
export const firebaseConfig = {
    apiKey: "AIzaSyCdJr8pOqs2KklXxViQfboiPONoXrvgzjM",
    authDomain: "projecttodo-8d707.firebaseapp.com",
    databaseURL: "https://projecttodo-8d707.firebaseio.com",
    projectId: "projecttodo-8d707",
    storageBucket: "projecttodo-8d707.appspot.com",
    messagingSenderId: "191456069720",
    appId: "1:191456069720:web:2aaee3693a5458e4"
  };

firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("Task");



