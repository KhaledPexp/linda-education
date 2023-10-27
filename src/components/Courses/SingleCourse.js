import React from 'react';
import { FaStar, FaStarHalf, Falike } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleCourse = ({course}) => {
    console.log(course);
    return (
        <div>
            <img className='w-auto rounded' src={course.image} alt="" />
            <div className='py-5'>
                <h2 className='text-2xl font-bold leading-8'>{course.name}</h2>
                <p className='mb-4 text-gray-700 text-base leading-normal py-4'>{course.short_description}</p>
            </div>
            
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <span className='flex text-yellow-500 pb-1'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalf></FaStarHalf>
                    </span>
                    <span className='ps-2 pb-1'>
                        <Link aria-label='like'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"><polyline points="6 23 1 23 1 12 6 12" fill="none" strokeMiterlimit="10"></polyline><path d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z" fill="none" stroke="currentColor" strokeMiterlimit="10"></path></svg>
                        </Link>
                    </span>
                    <p className='ps-3'>
                        {course.rating}
                    </p>     
                </div>
                <div>
                    <p> ${course.price}</p>
                </div>
            </div>
            
        </div>
    );
};

export default SingleCourse;