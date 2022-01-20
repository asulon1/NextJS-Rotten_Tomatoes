import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBQfsze2W7BsmkxL-jQfDIhenRBPSDdpT0",
  authDomain: "rotten-tomatoes-68e0b.firebaseapp.com",
  projectId: "rotten-tomatoes-68e0b",
  storageBucket: "rotten-tomatoes-68e0b.appspot.com",
  messagingSenderId: "458068527639",
  appId: "1:458068527639:web:7039c86f0eafde1ace6a52",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};