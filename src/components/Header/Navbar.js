import React, { useContext, useState } from 'react';
import { authProvider } from '../../Context/Context';
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css"
import toast from 'react-hot-toast';



const Navbar = () => {
    const {user, signOutAll} = useContext(authProvider);
    const [collapse, setCollapse] = useState(false);

    const handleCollapse = () => {
        setCollapse(!collapse);
    }

    const handelSignOut = () =>{
        signOutAll()
            .then(()=>{
                toast.success('You have successfully logged out')
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='flex justify-between items-center mx-16 px-8 py-5'>
            
            <div className=''>
                <Link className={collapse?'hidden':''} to='/'><img className='inline-block w-32 mr-5 pr-5' src="Images/logo.png" alt="" /></Link>
                <NavLink className='m-2 p-2 max-md:hidden' to='/'>Home</NavLink>
                <NavLink className='m-2 p-2 max-md:hidden' to='/courses'>Courses</NavLink>
                <NavLink className='m-2 max-md:hidden' to='/faq'>FAQ</NavLink>
                <NavLink className='m-2 max-md:hidden' to='/blog'>Blog</NavLink>
            </div>
                
            
            <div className='max-md:hidden'>
                <p className='inline-block mr-5'>{user && <>Welcome, {user.displayName}</>}</p>
                {user?.uid? 
                <><button onClick={handelSignOut} className='m-2 px-3 py-2 border border-blue-400 rounded hover:bg-blue-500 hover:text-white'>Log Out</button>
                <Link className={user?.photoURL? 'ps-2':'m-2 px-4 py-3 border border-blue-400 rounded hover:bg-blue-500 hover:text-white'} to='/userProfile'>{user?.photoURL? <><img className='w-10 h-10 inline-block' src={user.photoURL} alt="" /></> :'User'}</Link></>:
                <><NavLink className='m-2 p-2' to='/signIn'>Sign in</NavLink>
                <NavLink className='m-2 px-4 py-3 border border-blue-400 rounded hover:bg-blue-500 hover:text-white' to='/signUp'>Sign up</NavLink>
                </>
                }
            </div>
            <div className={collapse? 'absolute w-4/6 mx-16 top-16 justify-between border p-8 bg-white border-gray-300 flex animator md:hidden': 'hidden'}>
            <>
                
                <nav>
                    <NavLink to='/' className='block'><img className=' w-16 h-16 mr-5 pr-5' src="Images/logo.png" alt="" /></NavLink>
                    <NavLink className='m-2  block' to='/'>Home</NavLink>
                    <NavLink className='m-2  block' to='/courses'>Courses</NavLink>
                    <NavLink className='m-2 block' to='/faq'>FAQ</NavLink>
                    <NavLink className='m-2 block' to='/blog'>Blog</NavLink> 
                </nav>
                
                <div>
                    <p className='block mr-5'>{user && <span className='ms-2'>Welcome, {user.displayName}</span>}</p>
                    {user?.uid? 
                    <><button onClick={handelSignOut} className='m-2 px-3 py-2 border block border-blue-400 rounded hover:bg-blue-500 hover:text-white'>Log Out</button>
                    </>:
                    <><NavLink className='m-2 p-2' to='/signIn'>Sign in</NavLink>
                    <NavLink className='m-2 px-4 py-3 border block border-blue-400 rounded hover:bg-blue-500 hover:text-white' to='/signUp'>Sign up</NavLink>
                    </>
                }
               </div>
               <div onClick={handleCollapse} className="hidden max-md:block h-10">
                    {collapse?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg> :'' 
    
                    }

                </div>
            </>
            </div>
            
                <div onClick={handleCollapse} className="hidden max-md:block mr-10">
                    {collapse?
                    '':   
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"         className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg> 
        
                    }

                </div>
            
        </div>
    );
};

export default Navbar;