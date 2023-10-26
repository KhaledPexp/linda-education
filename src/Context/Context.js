import { createContext, React } from "react";
import {getAuth} from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const authProvider = createContext();


const Context = ({children}) => {

    const authInfo = {
        name: 'borish',
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