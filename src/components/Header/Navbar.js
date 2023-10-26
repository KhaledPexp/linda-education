import React, { useContext } from 'react';
import { authProvider } from '../../Context/Context';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const {name} = useContext(authProvider);

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
                <NavLink className='m-2 p-2' to='sign-in'>Sign in</NavLink>
                <NavLink className='m-2 px-4 py-3 border border-blue-400 rounded hover:bg-blue-500 hover:text-white' to='sign-up'>Sign up</NavLink>
            </div>
        </div>
    );
};

export default Navbar;