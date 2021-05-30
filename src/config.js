import Firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDkgp95chHf_B7sA7I0Ctw3Bd1ff-xLVqU",
    authDomain: "gelirgider-b9ccb.firebaseapp.com",
    databaseURL: "https://gelirgider-b9ccb-default-rtdb.firebaseio.com",
    projectId: "gelirgider-b9ccb",
    storageBucket: "gelirgider-b9ccb.appspot.com",
    messagingSenderId: "290667384860",
    appId: "1:290667384860:web:2a020dd7d6e002ca5e0fd9"
  };

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();