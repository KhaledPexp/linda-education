import React from 'react';
import { Link } from 'react-router-dom';

const PopularCourse = ({course}) => {
    
    return (
        <div className='flex flex-col justify-between  border border-gray-100 relative'>
            <div>
                <img className='w-auto' src={course.image} alt="" />
                <h2 className='text-xl mt-5'>{course.name}</h2>
                <h2 className='mb-16 pt-2'>{course.reviews}</h2>
            </div>
            <div className='flex justify-center'>
                <div className='text-center absolute bottom-3 '>
                    <Link to={`/course-details/${course.id}`}><button className='px-4 py-2 mt-5 btn bg-amber-300 mx-auto'>Enroll Now</button></Link> 
                </div>
            </div>
        </div>
    );
};

export default PopularCourse;