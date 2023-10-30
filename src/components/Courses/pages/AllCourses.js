import React from 'react';
import { useOutletContext } from 'react-router-dom';
import SingleCourse from '../SingleCourse';

const AllCourses = () => {
    const AllCourses = useOutletContext();
    const CoursesArray = AllCourses[0].AllCourses;

    return (
        <div className='grid grid-cols-2 gap-10 max-sm:grid-cols-1'>
            {
                CoursesArray.map((course, idx) => {
                    
                    
                        return (<SingleCourse course={course} key={idx}></SingleCourse>);
                    
                    
                })
            }
        </div>
    );
};

export default AllCourses;