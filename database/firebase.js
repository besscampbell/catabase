import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseUrl: REACT_APP_FIREBASE_DATABASE_URL,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;