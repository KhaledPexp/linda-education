import { createContext, React, useEffect, useState } from "react";
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';


const auth = getAuth(app);

export const authProvider = createContext();




const Context = ({children}) => {

    const [user, setUser] = useState(null);

    const signInGoogle = (provider) => {

        return(signInWithPopup(auth, provider));
    }
    const signOutAll = () => {
            return(signOut(auth));
    }

    useEffect(() =>{
        const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            console.log('user state change', currentUser);
            setUser(currentUser);
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

    const authInfo = {AllCourses, user, signInGoogle, signOutAll}
    return (
        <div>
            <authProvider.Provider value={authInfo}>
                {children}
            </authProvider.Provider>
        </div>
    );
};


export default Context;