import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEKMRHwICvXNTtBuI1xyhNJId1NJbEtkk",
  authDomain: "hedoc-hackandchill.firebaseapp.com",
  projectId: "hedoc-hackandchill",
  storageBucket: "hedoc-hackandchill.appspot.com",
  messagingSenderId: "862098467198",
  appId: "1:862098467198:web:c700a09e534e4f6e746b2f"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;

export{app,auth};