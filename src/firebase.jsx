import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA7krwvOTQnomfIiXng2Rxo25KjBJZve5E",
  authDomain: "fir-login-7044d.firebaseapp.com",
  projectId: "fir-login-7044d",
  storageBucket: "fir-login-7044d.appspot.com",
  messagingSenderId: "238272295713",
  appId: "1:238272295713:web:f76ce5bacf97ad9602c460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
