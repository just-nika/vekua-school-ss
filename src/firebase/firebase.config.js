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

const secondaryAppConfig = {
  apiKey: "AIzaSyDYBRFw1D9l_31WdU5-Pbsj2r2zCD1-_vg",
  authDomain: "vekua-school-saturday-school.firebaseapp.com",
  projectId: "vekua-school-saturday-school",
  storageBucket: "vekua-school-saturday-school.appspot.com",
  messagingSenderId: "167702910587",
  appId: "1:167702910587:web:1cdbbbaa35002a514fb4de",
  measurementId: "G-BZNG2CEYYJ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const secondaryApp = firebase.initializeApp(secondaryAppConfig, "secondary");
const firestore = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {
  secondaryApp,
  firebaseConfig,
  firestore,
  auth,
  storage,
  firebase
}