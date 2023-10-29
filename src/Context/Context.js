import { createContext, React, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';


const auth = getAuth(app);

export const authProvider = createContext();




const Context = ({children}) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const updateUser = (name, photoURL) => {
        return(updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        }));
    }
    // sign up with email and password
    const signUpWithpassword = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);

    }
    // sign in with email
    const signInWithPassword = (email, password) =>{

        return signInWithEmailAndPassword(auth, email, password);
    }
    //sign in with google 
    const signInGoogle = (provider) => {

        return(signInWithPopup(auth, provider));
    }
    //sign in with github
    const signInGithub = (provider) =>{

        return signInWithPopup(auth, provider);
    }

    const signOutAll = () => {
            return(signOut(auth));
    }

    useEffect(() =>{
        const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            console.log('user state change', currentUser);
            setUser(currentUser);
            setLoader(false);
        })
        return () => {
            unsubscribe();
        }
    },[])

    const [AllCourses, setAllCourses] =  useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/courses')
        .then(res => res.json())
        .then(data => setAllCourses(data))
        .catch(error => console.error(error))
    },[])

    const authInfo = {AllCourses, user,loader, updateUser, signInGoogle, signInGithub, signUpWithpassword, signInWithPassword, signOutAll}
    return (
        <div>
            <authProvider.Provider value={authInfo}>
                {children}
            </authProvider.Provider>
        </div>
    );
};


export default Context;