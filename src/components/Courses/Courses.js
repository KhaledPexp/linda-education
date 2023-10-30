import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { authProvider } from '../../Context/Context';

const Courses = () => {

    const AllCourses = useContext(authProvider);

    const [currentCourse, setCurrentCourse] = useState(null);

    const currntCourses = (e) =>{
        e.preventDefault();

        const courseName = e.target.innerText;
        console.log(courseName);

        setCurrentCourse(courseName);

    }
    

    return (
        <div>
            <section className='info'>
                <div className='w-full my-10 bg-blue-400 custom text-center'>
                    <h1 className='text-white text-6xl p-10'>{currentCourse? currentCourse:'Course'}</h1>
                </div>
            </section>
            <section className='courses  flex justify-between mx-16 my-24 p-5 leading-loose text-xl max-lg:block' >
                <aside className='px-5 w-auto max-lg:mb-16'>
                        <h2 className='text-4xl pb-3 max-lg:text-center'>Subjects</h2>
                        <ul className='max-lg:flex max-lg:flex-wrap max-lg:justify-between '>
                            <li className='max-lg:mr-2' onClick={currntCourses}><Link to='/courses/computer'>Computer Science</Link></li>
                            <li className='max-lg:mr-2' onClick={currntCourses} ><Link  to='/courses/teaching'>Teaching</Link></li>
                            <li className='max-lg:mr-2' onClick={currntCourses}><Link  to='/courses/history'>History</Link></li>
                            <li className='max-lg:mr-2' onClick={currntCourses} ><Link to='/courses/literature'>Literature</Link></li>
                            <li className='max-lg:mr-2' onClick={currntCourses} ><Link to='/courses/language'>Language</Link></li>
                            <li className='max-lg:block' onClick={currntCourses}><Link  to='/courses/all-courses'>All Courses</Link></li>
                            
                        </ul>
                </aside>
                <article className='ms-5 w-4/6 max-lg:w-full max-lg:ms-0'>
                        <Outlet context={[AllCourses]}></Outlet>
                </article>
            </section>
        </div>
    );
};

export default Courses;