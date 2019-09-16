import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDevdPe57rZrwsF3AV5gPOnmPx9Ph5_R2U",
  authDomain: "oblivion-shop.firebaseapp.com",
  databaseURL: "https://oblivion-shop.firebaseio.com",
  projectId: "oblivion-shop",
  storageBucket: "",
  messagingSenderId: "172060948129",
  appId: "1:172060948129:web:26c3b602c50b961c30a2e0"
};

export const createUserProfileDocument = async (
  userAuth,
  additionalData
) => {
  if (!userAuth) return;

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
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
