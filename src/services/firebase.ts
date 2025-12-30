import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlVU3Yj4EueAsr5Y2k-XohMIiqC2PNWxs",
  authDomain: "plataforma-saude-integrada.firebaseapp.com",
  projectId: "plataforma-saude-integrada",
  storageBucket: "plataforma-saude-integrada.firebasestorage.app",
  messagingSenderId: "239263251770",
  appId: "1:239263251770:web:876fa07276141f5d9a6403"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
