import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const SignUp = () => {
    return (
        <div>
            <section className='info'>
                <div className='w-full my-10 bg-blue-400 custom text-center'>
                    <h1 className='text-white text-6xl p-10'>Please Register</h1>
                </div>
            </section>
            <section className='flex justify-center w-full'>
                <div className='mt-10 border border-gray-300 p-8 w-2/6 rounded shadow-md'>
                    <form className="mb-8 space-y-5">
                        <label className="block">
                            <span className="block mb-1 text-xs font-medium text-gray-700">Your Name</span>
                            <input className="w-full border border-gray-300 p-2 rounded" name="email" type="text" placeholder="Your Name" required/>
                        </label>
                        <label className="block">
                            <span className="block mb-1 text-xs font-medium text-gray-700">Photo URL</span>
                            <input className="w-full border border-gray-300 p-2 rounded" name="email" type="email" placeholder="Your Photo URL" required/>
                        </label>
                        <label className="block">
                            <span className="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
                            <input className="w-full border border-gray-300 p-2 rounded" name="email" type="email" placeholder="Ex. james@bond.com" required/>
                        </label>
                        <label className="block">
                            <span className="block mb-1 text-xs font-medium text-gray-700">Your Password</span>
                            <input className="w-full border border-gray-300 p-2 rounded" name="password" type="password" placeholder="••••••••" required/>
                        </label>
                        <div className="text-red-600 mb-0"></div>
                        <input type="submit" className="w-full text-white text-lg cursor-pointer py-3 mt-1 bg-amber-300 hover:bg-amber-200 transition-all" value="Register"/>
                           
                    </form>
                    <div className="space-y-8">
                        <div className="text-center border-b border-gray-200">
                            <span className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white">Or</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                                <div className="py-3 ">
                                    <div className="flex bg-blue-400 text-white p-4 rounded justify-center cursor-pointer"><span className='pr-2'> <FaGoogle/></span> Google</div>
                                </div>
                                <div className="py-3">
                                    <div className="flex bg-black text-white p-4 rounded justify-center cursor-pointer">
                                        
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