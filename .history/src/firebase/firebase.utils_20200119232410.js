import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDCmV_jrgbUeXsEeIT51xOPqIkd0DPGuW4",
    authDomain: "sup-sup-cb1c0.firebaseapp.com",
    databaseURL: "https://sup-sup-cb1c0.firebaseio.com",
    projectId: "sup-sup-cb1c0",
    storageBucket: "sup-sup-cb1c0.appspot.com",
    messagingSenderId: "684628352599",
    appId: "1:684628352599:web:408e5a56882e0db0ffcd12",
    measurementId: "G-PM7V2N3X1D"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
  }
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;