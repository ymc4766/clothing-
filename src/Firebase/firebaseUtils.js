// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebse/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// import { doc } from "firebase/firestore";

// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDDZe4IzJtieCx3swzA7WXQP6FTugu1Myk",
  authDomain: "clothing-app-e04c6.firebaseapp.com",
  projectId: "clothing-app-e04c6",
  storageBucket: "clothing-app-e04c6.appspot.com",
  messagingSenderId: "56257736556",
  appId: "1:56257736556:web:97593a7b79ff47caa40d49",
  measurementId: "G-LFP53QMEZ9",
};

firebase.initializeApp(config);

export const createUserProfileDoc = async (userAuth, additionalData) => {
  // if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// export const auth = getAuth();
// export const firestore = getFirestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export const firebase;

export default firebase;
