import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { authProvider } from '../../Context/Context';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [errorMsg, setErrorMsg] = useState(null);

    const { signUpWithpassword, signInGoogle, signInGithub} = useContext(authProvider);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    
    const handleSignUpWithPass = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoUrl.value;

        signUpWithpassword(email, password)
            .then((userCredential) => { 
                const user = userCredential.user;
                form.reset()
                navigate(from, {replace: true})
                toast.success('Your have successfully register')
            })
            .catch(error => {
                setErrorMsg(error.message);
            })

    } 
    const handelGithubLogin = () => {
        signInGithub (githubProvider)
            .then (result => {
                const user = result.user;
                navigate(from, {replace: true})
                toast.success('Your Github login was successful')
            })
            .catch (error => {
                setErrorMsg(error.message);
            })
        
    }

    const handelGoogleLogin = () => {
        signInGoogle (googleProvider)
            .then (result => {
                const user = result.user;
                console.log(user);
                toast.success('Your google login was successful')
            })
            .catch (error => {
                setErrorMsg(error.message);
            })
        
    }
    return (
        <div>
            <section className='info'>
                <div className='w-full my-10 bg-blue-400 custom text-center'>
                    <h1 className='text-white text-6xl p-10'>Please Register</h1>
                </div>
            </section>
            <section className='flex justify-center w-full'>
                <div className='mt-10 border border-gray-300 p-8 w-2/6 rounded shadow-md max-lg:w-3/6 max-md:w-4/6 max-sm:w-5/6'>
                    <form className="mb-8 space-y-5" onSubmit={(e) => handleSignUpWithPass(e)}>
                        <label className="block">
                            <span className="block mb-1 text-xs font-medium text-gray-700">Your Name</span>
                            <input className="w-full border border-gray-300 p-2 rounded" name="name" type="text" placeholder="Your Name" required/>
                        </label>
                        <label className="block">
                            <span className="block mb-1 text-xs font-medium text-gray-700">Photo URL</span>
                            <input className="w-full border border-gray-300 p-2 rounded" name="photoUrl" type="text" placeholder="Your Photo URL" required/>
                        </label>
                        <label className="block">
                            <span className="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
                            <input className="w-full border border-gray-300 p-2 rounded" name="email" type="email" placeholder="Ex. james@bond.com" required/>
                        </label>
                        <label className="block">
                            <span className="block mb-1 text-xs font-medium text-gray-700">Your Password</span>
                            <input className="w-full border border-gray-300 p-2 rounded" name="password" type="password" placeholder="••••••••" required/>
                        </label>
                        <div className={errorMsg? 'block text-red-500':'hidden'}>
                                <p>{errorMsg}</p>
                        </div>
                        <div className="text-red-600 mb-0"></div>
                        <input type="submit" className="w-full text-white text-lg cursor-pointer py-3 mt-1 bg-amber-300 hover:bg-amber-200 transition-all" value="Register"/>
                           
                    </form>
                    <div className="space-y-8">
                        <div className="text-center border-b border-gray-200">
                            <span className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white">Or</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                                <div className="py-3 ">
                                    <div onClick={handelGoogleLogin} className="flex bg-blue-400 text-white p-4 rounded justify-center cursor-pointer"><span className='pr-2'> <FaGoogle/></span> Google</div>
                                </div>
                                <div className="py-3">
                                    <div onClick={handelGithubLogin}  className="flex bg-black text-white p-4 rounded justify-center cursor-pointer">
                                        
                                         <span className='pr-2'><FaGithub/> </span>Github
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;