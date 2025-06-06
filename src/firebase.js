import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyCiW_BfLTvH_XLgqmt6xGyUq8Z0N1ilT2E",
  authDomain: "portfolio-6555f.firebaseapp.com",
  projectId: "portfolio-6555f",
  storageBucket: "portfolio-6555f.firebasestorage.app",
  messagingSenderId: "513300027793",
  appId: "1:513300027793:web:033dd06ac2d291bb73e230",
  measurementId: "G-XN5ZHFBJ3W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
