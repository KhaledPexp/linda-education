import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <div className='flex justify-between p-12 bg-blue-400 mx-16 mt-10 custom'>
            <div className='h-auto  border-r '>
                <img src="Images/header.png" alt="" />

            </div>
            <div className='w-2/3 pr-5'>
                <h1 className='text-5xl text-white'>Linda - Improve Your Online Learning Experience Better Instantly</h1>
                <p className='text-white pt-5'>We have 50k+ Online courses & 600K+ Online registered student. Find your desired Courses from them.</p>
                <div className='mt-10'>
                 <button className='btn px-5 p-2 text-slate-600 text-3xl bg-amber-300 hover:bg-amber-400'>View Courses</button>
                </div>
            </div>
        </div>
    );
};

export default Home;