import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkxFZ3CBv2WTAjioYnThiU1VYAw8zi6As",
    authDomain: "crown-db-e849e.firebaseapp.com",
    databaseURL: "https://crown-db-e849e.firebaseio.com",
    projectId: "crown-db-e849e",
    storageBucket: "crown-db-e849e.appspot.com",
    messagingSenderId: "877240295776",
    appId: "1:877240295776:web:30c1076931117fc601fe05",
    measurementId: "G-4ZYQSG5V72"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;