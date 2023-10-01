import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';





 const config = {
    apiKey: "AIzaSyDzpSRKrajHdHChWJ9VzmSZ7OsD6YA-8kc",
  authDomain: "as-clothing-db.firebaseapp.com",
  projectId: "as-clothing-db",
  storageBucket: "as-clothing-db.appspot.com",
  messagingSenderId: "735033172824",
  appId: "1:735033172824:web:245c4bf289081228e17b2d",
  measurementId: "G-SBPDDMETQD"
};

firebase.initializeApp(config);

  // export const createUserProfileDocument = async (userAuth, additionalData) => {
  //   if (!userAuth) return;

  //   const userRef = firestore.doc(`users/${userAuth.uid}`);

  //   const snapShot = await userRef.get();

  //   if (!snapShot.exists) {
  //     const { displayName, email } = userAuth;
  //     const createdAt = new Date();
  //     try {
  //       await userRef.set({
  //         displayName,
  //         email,
  //         createdAt,
  //         ...additionalData
  //       });
  //     } catch (error) {
  //       console.log('error creating user', error.message);
  //     }
  //   }

  //   return userRef;
  // };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const handleUserProfile= async({userAuth,additionalData})=>
{
  if(!userAuth) return;
  const {uid}=userAuth;
  const userRef =firestore.doc(`users/${uid}`);
  const snapShot=await userRef.get();
  if(!snapShot.exists){
    const {displayName,email}=userAuth;
    const timestamp= new Date();
    const userRoles=['user'];
    try{
      await userRef.set({
displayName,
email,
createdDate:timestamp,
userRoles,
...additionalData
      });

    }catch(err)
    {
      console.log(err);
    }
  }
  return userRef;
}
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
}
export default firebase;
