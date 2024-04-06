
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB8GS7xi6XFi5ZEBGsJgW5D5SohEzC4BHE",
  authDomain: "des-project-ef140.firebaseapp.com",
  projectId: "des-project-ef140",
  storageBucket: "des-project-ef140.appspot.com",
  messagingSenderId: "874590041313",
  appId: "1:874590041313:web:2e71c24074bde2f9b7f3a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db
