const firebase = require('firebase');

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
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    defaultDatabase = firebase.database();
}

export function AddToWishlist(path, email){
  defaultDatabase = defaultDatabase ? defaultDatabase : firebase.database();
  return query.defaultDatabase.ref('wishlist').child(path).push(email, (err) => err ? console.error(err) : "");
}