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
  appId: "1:172060948129:web:26c3b602c50b961c30a2e0",
};

firebase.initializeApp(config);

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
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

// one-time func for adding info in db
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(
    doc => {
      const { title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items,
      };
    }
  );

  return transformedCollection.reduce(
    (accumulator, collection) => {
      accumulator[
        collection.title.toLowerCase()
      ] = collection;
      return accumulator;
    },
    {}
  );
};

export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(
      userAuth => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () =>
  auth.signInWithPopup(googleProvider);

export default firebase;
