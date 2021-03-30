import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCXbE0Saz1YD5ENSF_DrUK9Gnt3DuL2IS4",
    authDomain: "link-preview-b665c.firebaseapp.com",
    projectId: "link-preview-b665c",
    storageBucket: "link-preview-b665c.appspot.com",
    messagingSenderId: "666484319908",
    appId: "1:666484319908:web:dd9e885cf1fd7bb8eee831",
    measurementId: "G-1K2SKNQELG"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();