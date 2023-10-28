import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <section className='info'>
                <div className='w-full my-10 bg-blue-400 custom text-center'>
                    <h1 className='text-white text-6xl p-10'>Please Sign In</h1>
                </div>
            </section>
            <section className='flex justify-center w-full'>
                <div className='mt-10 border border-gray-300 p-8 w-2/6 rounded shadow-md'>
                    <form class="mb-8 space-y-5">
                        <label class="block">
                            <span class="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
                            <input class="w-full border border-gray-300 p-2 rounded" name="email" type="email" placeholder="Ex. james@bond.com" required/>
                        </label>
                        <label class="block">
                            <span class="block mb-1 text-xs font-medium text-gray-700">Your Password</span>
                            <input class="w-full border border-gray-300 p-2 rounded" name="password" type="password" placeholder="••••••••" required/>
                        </label>
                        <div class="text-red-600 mb-0"></div>
                        <input type="submit" class="w-full text-white text-lg cursor-pointer py-3 mt-1 bg-amber-400 hover:bg-amber-300 transition-all" value="Login Now"/>
                           
                    </form>
                    <div class="space-y-8">
                        <div class="text-center border-b border-gray-200">
                            <span class="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white">Or</span>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                                <div class="py-3 ">
                                    <div class="flex bg-blue-400 text-white p-4 rounded justify-center cursor-pointer"><span className='pr-2'> <FaGoogle/></span> Google</div>
                                </div>
                                <div class="py-3">
                                    <div class="flex bg-black text-white p-4 rounded justify-center cursor-pointer">
                                        
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

export default Login;