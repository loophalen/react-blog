import  * as firebase from 'firebase'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyA_2IUH75F8Z8Jhb0Lk01ggqLi86rv_6WU",
    authDomain: "blog-d9e5e.firebaseapp.com",
    databaseURL: "https://blog-d9e5e.firebaseio.com",
    projectId: "blog-d9e5e",
    storageBucket: "",
    messagingSenderId: "156956712256"
  };
  firebase.initializeApp(config);

  export const database = firbase.database().ref('/posts')
  