import { createContext, React, useEffect, useState } from "react";
import {getAuth} from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const authProvider = createContext();


const Context = ({children}) => {

    const [AllCourses, setAllCourses] =  useState([]);

    

    useEffect(()=>{
        fetch('http://localhost:8080/courses')
        .then(res => res.json())
        .then(data => setAllCourses(data))
        .catch(error => console.error(error))
    },[])

    const authInfo = {AllCourses,
        
    }
    return (
        <div>
            <authProvider.Provider value={authInfo}>
                {children}
            </authProvider.Provider>
        </div>
    );
};


export default Context;