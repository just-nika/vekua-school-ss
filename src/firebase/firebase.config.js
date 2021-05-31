import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD9rKDLJKcPtuoL8cNDN-iV4Z5ODahUbpo",
    authDomain: "vekua-school.firebaseapp.com",
    projectId: "vekua-school",
    storageBucket: "vekua-school.appspot.com",
    messagingSenderId: "490543619265",
    appId: "1:490543619265:web:b272784e5a282cc210c840",
    measurementId: "G-4HDDBNH05D"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const firestore = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {
    firebaseConfig,
    firestore,
    auth,
    storage,
    firebase
}