import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBMSZE3O5kHM-zm1D6q3g00rDpiaS7jBrc',
  authDomain: 'instagram-clone-1ce9a.firebaseapp.com',
  projectId: 'instagram-clone-1ce9a',
  storageBucket: 'instagram-clone-1ce9a.appspot.com',
  messagingSenderId: '504117666494',
  appId: '1:504117666494:web:3ac8fcfa887942b173f4ef',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
