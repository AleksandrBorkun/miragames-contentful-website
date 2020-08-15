import * as firebase from 'firebase/app';
import 'firebase/database'
let defaultDatabase = null;

var firebaseConfig = {
  apiKey: "AIzaSyAsRJSk2yrkPLN0Q7Ar8d1TrqG-y_eGln0",
  authDomain: "miragame.firebaseapp.com",
  databaseURL: "https://miragame.firebaseio.com",
  projectId: "miragame",
  storageBucket: "miragame.appspot.com",
  messagingSenderId: "384866867099",
  appId: "1:384866867099:web:5ebdb64efc53560d04b33e",
  measurementId: "G-LG1SVYL6Y3"
};

  // Initialize Firebase
  if (!firebase.apps.length) {
    if('function' === typeof firebase.analytics) firebase.analytics();
    firebase.initializeApp(firebaseConfig);
}

export function AddToWishlist(path, email){
  defaultDatabase = defaultDatabase ? defaultDatabase : firebase.database();
  return defaultDatabase.ref('wishlist').child(path).push(email, (err) => err ? console.error(err) : "");
}

export function SaveDonateTransiction(path, reciept_id){
  console.log('trying to save order ' + reciept_id)
  defaultDatabase = defaultDatabase ? defaultDatabase : firebase.database();
  return defaultDatabase.ref('donations').child(path).push(reciept_id, (err) => err ? console.error(err) : "");
}