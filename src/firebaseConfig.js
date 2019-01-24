import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBbPv9Tou6uzwiRNxOQ66zdLniR64E4kzo",
    authDomain: "clicker-eea05.firebaseapp.com",
    databaseURL: "https://clicker-eea05.firebaseio.com",
    projectId: "clicker-eea05",
    storageBucket: "clicker-eea05.appspot.com",
    messagingSenderId: "480174926475"
};

const firebaseApp = firebase.initializeApp(config);
export const database = firebaseApp.database();
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()