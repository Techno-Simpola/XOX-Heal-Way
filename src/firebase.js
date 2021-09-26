// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';
import "firebase/compat/database"
// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyCpbqQklo2L7N0RUdoNtzmQUMFMVKtjMmo",
  authDomain: "react-crud-4ca3c.firebaseapp.com",
  projectId: "react-crud-4ca3c",
  storageBucket: "react-crud-4ca3c.appspot.com",
  messagingSenderId: "826172619626",
  appId: "1:826172619626:web:120d4027e6782d46144313"
};

  const fireDb=firebase.initializeApp(firebaseConfig);
  

export default fireDb.database().ref();