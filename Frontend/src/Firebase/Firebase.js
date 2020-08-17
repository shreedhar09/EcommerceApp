import * as firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyBP1NsSV9fsLnplHtQQ73boDtVmiFP5Gxo",
  authDomain: "ecomauth-77aa4.firebaseapp.com",
  databaseURL: "https://ecomauth-77aa4.firebaseio.com",
  projectId: "ecomauth-77aa4",
  storageBucket: "ecomauth-77aa4.appspot.com",
  messagingSenderId: "120270966288",
  appId: "1:120270966288:web:662dd277b20808d1ef0495"
};

// Initialize Firebase.
firebase.initializeApp(firebaseConfig);

//Create Database.
export const Database = firebase.database().ref("/UserAuthData");

//Sign in with Google.

export const auth = firebase.auth();

//Google Provider.

export const googleProvider = new firebase.auth.GoogleAuthProvider();
