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

export const createUserProfileDocument =async(userAuth, otherData)=>{
        if(!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();
        if(!snapShot.exists){
               
                const { displayName , email } = userAuth;
                const createdAt = new Date();
                try{
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...otherData
                        })

                }catch(error){
                console.log('error creating user', error.message);

                }
        }
        return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle =()=>auth.signInWithPopup(provider);
export default firebase;