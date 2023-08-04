import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import  "firebase/compat/firestore"


const firebaseConfig = {

    apiKey: "AIzaSyAYnvZRP3ga6hL5jEkqe1SVyqhIINtCIj4",
    authDomain: "task-abee7.firebaseapp.com",
    projectId: "task-abee7",
    storageBucket: "task-abee7.appspot.com",
    messagingSenderId: "1066935646433",
    appId: "1:1066935646433:web:c06c87f4e4fd49947f5fa0"
  };

  const firebaseapp=firebase.initializeApp(firebaseConfig)
  const db=firebaseapp.firestore()
  const auth=firebase.auth();
  export {db,auth}