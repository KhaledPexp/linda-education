import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7azLRoTCVRZL0BiDWUViLrFmk_MbkSd8",
    authDomain: "linda-education.firebaseapp.com",
    projectId: "linda-education",
    storageBucket: "linda-education.appspot.com",
    messagingSenderId: "856233788788",
    appId: "1:856233788788:web:126e4e99116922606cd821",
    measurementId: "G-ZFKTG3PXS0"
};

const app = initializeApp(firebaseConfig);
export default app;