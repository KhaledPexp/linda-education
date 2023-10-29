import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const courseArry = useLoaderData();
    const course = courseArry[0];
    const {name, category, short_description, id} = course;
    
    return (
        <div>
            <section className='info'>
                <div className='w-full my-8 bg-blue-400 custom text-center'>
                    <h1 className='text-white text-6xl p-5'>{category}</h1>
                    <p className='text-white text-lg'>{name}</p>
                    <p className='text-white text-lg'>{short_description}</p>
                    <button disabled className='btn py-2 px-4 bg-amber-300 my-5'>Checkout id: <span>{id}</span></button>
                </div>
            </section>
        </div>
    );
};

export default CheckOut;