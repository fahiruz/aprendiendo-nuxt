import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCSI4zbdPaN-SEEDYuInV2lD-2UwmLzgwE",
    authDomain: "nuxt-5999e.firebaseapp.com",
    databaseURL: "https://nuxt-5999e.firebaseio.com",
    projectId: "nuxt-5999e",
    storageBucket: "nuxt-5999e.appspot.com",
    messagingSenderId: "184058366775"
  };
  firebase.initializeApp(config);

  export default firebase