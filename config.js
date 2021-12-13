import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyBZFnVZPQwx4GW8y4xUUEvW7p9q_9htEmc",
    authDomain: "p-71-9777f.firebaseapp.com",
    projectId: "p-71-9777f",
    storageBucket: "p-71-9777f.appspot.com",
    messagingSenderId: "138091905261",
    appId: "1:138091905261:web:a75583e7fecbf64879cce4"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();