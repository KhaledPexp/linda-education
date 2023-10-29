import React, { useContext } from 'react';
import { authProvider } from '../../Context/Context';
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css"


const Navbar = () => {
    const {user, signOutAll} = useContext(authProvider);

    const handelSignOut = () =>{
        signOutAll()
            .then(()=>{})
            .catch(error => console.error(error));
    }

    return (
        <div className='flex justify-between items-center mx-16 px-8 py-5'>
            <div>
                <img className='inline-block w-1/4 mr-5 pr-5' src="Images/logo.png" alt="" />
                <NavLink className='m-2 p-2' to='/'>Home</NavLink>
                <NavLink className='m-2 p-2' to='/courses'>Courses</NavLink>
                <NavLink className='m-2' to='/faq'>FAQ</NavLink>
                <NavLink className='m-2' to='/blog'>Blog</NavLink>
            </div>
            <div>
                <p className='inline-block mr-5'>{user && <>Welcome, {user.displayName}</>}</p>
                {user?.uid? 
                <><button onClick={handelSignOut} className='m-2 px-3 py-2 border border-blue-400 rounded hover:bg-blue-500 hover:text-white'>Log Out</button>
                <Link className={user?.photoURL? 'ps-2':'m-2 px-4 py-3 border border-blue-400 rounded hover:bg-blue-500 hover:text-white'} to='/userProfile'>{user?.photoURL? <><img className='w-10 h-10 inline-block' src={user.photoURL} alt="" /></> :'User'}</Link></>:
                <><NavLink className='m-2 p-2' to='/signIn'>Sign in</NavLink>
                <NavLink className='m-2 px-4 py-3 border border-blue-400 rounded hover:bg-blue-500 hover:text-white' to='/signUp'>Sign up</NavLink>
                </>
                }
                
            </div>
        </div>
    );
};

export default Navbar;