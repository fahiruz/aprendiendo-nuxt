import firebase, { firestore } from 'firebase'
var config = {
  apiKey: "AIzaSyD6LZy3GmdmYMAbUR7snFQVncW_KU19c9k",
  authDomain: "nuxt-eb99e.firebaseapp.com",
  databaseURL: "https://nuxt-eb99e.firebaseio.com",
  projectId: "nuxt-eb99e",
  storageBucket: "nuxt-eb99e.appspot.com",
  messagingSenderId: "580345173005"
}; 

  if(!firebase.apps.length){
    firebase.initializeApp(config);
  }
  
  const db =firebase.firestore()

  export default firebase
  export {
    db
  }