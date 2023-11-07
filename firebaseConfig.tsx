import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCQ5K9aBLeE7eIYXj5Ulp3tkdPfvNqhCc8',
  authDomain: 'boowme-2dc4c.firebaseapp.com',
  databaseURL: 'https://boowme-app-default-rtdb.firebaseio.com',
  projectId: 'boowme-2dc4c',
  storageBucket: 'boowme-2dc4c.appspot.com',
  messagingSenderId: '394795660383',
  appId: '1:394795660383:web:623be067c61e369fa157ea',
  // measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
