import React from 'react';
import { Link } from 'react-router-dom';

const ErroPage = () => {
    return (
        <div className='flex justify-center py-16'>
            <div className='space-y-8 text-center'>
                <h1 className='text-6xl font-bold'>404 Not Found</h1>
                <h2 className='text-3xl font-bold'>Sorry, we couldn't find this page.</h2>
                <p className='text-xl'>Please go back to Home page</p>
                <Link className='block' to='/'><button className='button px-4 py-2 bg-amber-300'>Homepage</button></Link>
            </div>
        </div>
    );
};

export default ErroPage;