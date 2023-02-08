import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDJ3ngVtdjTL_ZTZ89Wd-xwdr9OLVycrzw",
    authDomain: "e-d6f22.firebaseapp.com",
    projectId: "e-d6f22",
    storageBucket: "e-d6f22.appspot.com",
    messagingSenderId: "792651677828",
    appId: "1:792651677828:web:e279136b39c26178a5c2d1"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);