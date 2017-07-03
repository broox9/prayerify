import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDoGO6j6Cg6PuEfjaayHyXQzNKsp-iYpkg",
  authDomain: "prayerfire-15ea2.firebaseapp.com",
  databaseURL: "https://prayerfire-15ea2.firebaseio.com",
  projectId: "prayerfire-15ea2",
  storageBucket: "prayerfire-15ea2.appspot.com",
  messagingSenderId: "522915402714"
};

const io = firebase.initializeApp(config);

export default io;

export const auth = io.auth();

export const db = io.database();