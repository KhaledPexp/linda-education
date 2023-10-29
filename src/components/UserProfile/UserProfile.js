import React, { useContext, useState } from 'react';
import { authProvider } from '../../Context/Context';
import { Navigate } from 'react-router-dom';

const UserProfile = () => {
    const {user,updateUser, loader} = useContext(authProvider);
    
    if(loader){
        return(<div className='flex justify-center my-10 p-5'>
          <button type="button" disabled>
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"> </svg>
            Processing...
          </button>
      </div>);
    }

    const upadeData = (event) =>{
            event.preventDefault();
            const form =event.target;
            const name = form.username.value;
            const photoURL = form.userPhotoUrl.value;
            
            console.log(name, photoURL);
            updateUser(name, photoURL)
                .then(
                    () => {
                        form.reset();
                    }
                )
                .catch(error => console.error(error))
    }
    
    return (user?
        <>
            <div className='text-center flex justify-center mt-10'>
            <div className='w-2/5 border border-gray-300 p-10 shadow-md'>
                <h1 className='pb-5'>CHECK AND EDIT YOUR PROFILE</h1>
                <p>This Is Your Profile Page. You Can Edit Your Info Here!</p>
                <img className='w-10 h-10 rounded-full mx-auto mt-10' src={user?.photoURL} alt="ProfilePicture" />

                <form  onSubmit={(event)=> upadeData(event)}>
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
                <button  className='py-3 w-full my-5  bg-amber-300'>Update Your Profile</button>
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