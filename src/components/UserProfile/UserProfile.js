import React, { useContext } from 'react';
import { authProvider } from '../../Context/Context';
import { Navigate } from 'react-router-dom';

const UserProfile = () => {
    const {user} = useContext(authProvider);
    
    return (user?
        <>
            <div className='text-center flex justify-center mt-10'>
            <div className='w-2/5 border border-gray-300 p-10 shadow-md'>
                <h1 className='pb-5'>CHECK AND EDIT YOUR PROFILE</h1>
                <p>This Is Your Profile Page. You Can Edit Your Info Here!</p>
                <img className='w-10 h-10 rounded-full mx-auto mt-10' src={user?.photoURL} alt="ProfilePicture" />

                <form action="">
                <div className='space-y-8 text-left pt-10'>
                    <label className='block'>
                        <p>Your Name</p>
                        <input className='p-2 w-full border border-gray-500' name='username' type="text" placeholder='Your Name' required /> 
                    </label>
                    <label className='block'>
                        <p>Your Photo URL</p>
                        <input className='p-2 w-full border border-gray-500' name='userPhotoUrl' type="text" placeholder='Your Photo URL' /> 
                    </label>

                </div>
                <button className='py-3 w-full my-5  bg-amber-300'>Update Your Profile</button>
                </form>
                <button className='py-3 w-full mt-5  bg-amber-300'>Reset Your Password</button>
            </div>
        </div>
        </>:
        <>
            <Navigate to='/signIn'></Navigate>
        </>
    );
};

export default UserProfile;