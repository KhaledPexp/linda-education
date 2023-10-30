import React from 'react';
import { useOutletContext } from 'react-router-dom';
import SingleCourse from '../SingleCourse';

const Language = () => {
    const AllCourses = useOutletContext();
    const courseName = 'Language';
    const CoursesArray = AllCourses[0].AllCourses;

    
    
    return (
        <div className='grid grid-cols-2 gap-10 max-sm:grid-cols-1'>
            {
                CoursesArray.map((course, idx) => {
                    
                    if(courseName === course.category){
                        return (<SingleCourse course={course} key={idx}></SingleCourse>);
                    }
                    
                })
            }
        </div>
    );
};

export default Language;