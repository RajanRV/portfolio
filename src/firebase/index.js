import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';

// const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDgG-qAghT_gh8fR3CpVmg-4s4_K9E-0k8",
  authDomain: "portfolio-5d038.firebaseapp.com",
  databaseURL: "https://portfolio-5d038.firebaseio.com",
  projectId: "portfolio-5d038",
  storageBucket: "portfolio-5d038.appspot.com",
  messagingSenderId: "653187827135",
  appId: "1:653187827135:web:d504048ca59b70478b4d0a",
  measurementId: "G-JCY0GDSPQ4"
};
firebase.initializeApp(config);

// firebase.firestore();

export default firebase;