import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCnVnqCC9iOzDWFzMTyAF9SNBr1SH7F3C8",
  authDomain: "aibe-c0c91.firebaseapp.com",
  projectId: "aibe-c0c91",
  storageBucket: "aibe-c0c91.appspot.com",
  messagingSenderId: "300844998100",
  appId: "1:300844998100:web:97e0de9de4eec1be088a41",
  measurementId: "G-9Q5RKYT5M3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // ✅ This was missing
const analytics = getAnalytics(app);

export { db };
