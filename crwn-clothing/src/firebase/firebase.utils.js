import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    
        apiKey: "AIzaSyDYfvaDPtkIyapwLbLHxUj1SbaBo0RQzgs",
        authDomain: "ecommerce-site-dadbb.firebaseapp.com",
        projectId: "ecommerce-site-dadbb",
        storageBucket: "ecommerce-site-dadbb.appspot.com",
        messagingSenderId: "91923659246",
        appId: "1:91923659246:web:205af6171c83e4118a36ff",
        measurementId: "G-0E0Y7W2FSQ"
      
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle =()=>auth.signInWithPopup(provider);
export default firebase;