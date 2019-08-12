import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCbFHAkuxTxI7k-TGWgKcCGTb8xXDuS0ps",
  authDomain: "test-product-40656.firebaseapp.com",
  databaseURL: "https://test-product-40656.firebaseio.com",
  projectId: "test-product-40656",
  storageBucket: "test-product-40656.appspot.com",
  messagingSenderId: "601519734194"
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")