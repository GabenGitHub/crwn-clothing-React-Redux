import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyChbZqM59myoQPf3z4qGBVJELYmRpr-GC0",
    authDomain: "crwn-db-a9e37.firebaseapp.com",
    databaseURL: "https://crwn-db-a9e37.firebaseio.com",
    projectId: "crwn-db-a9e37",
    storageBucket: "crwn-db-a9e37.appspot.com",
    messagingSenderId: "444488395436",
    appId: "1:444488395436:web:49974c526038ad35c18d09"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;