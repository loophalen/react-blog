import  * as firebase from 'firebase'
// Initialize Firebase
const config = {
    apiKey: "AIzaSyCoU4B8hDP_wUI5XfaRU_gJdOEuKwT662U",
    authDomain: "react-blog-a3b32.firebaseapp.com",
    databaseURL: "https://react-blog-a3b32.firebaseio.com",
    projectId: "react-blog-a3b32",
    storageBucket: "",
    messagingSenderId: "361650530537"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('/posts')
