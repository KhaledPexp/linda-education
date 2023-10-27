import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { authProvider } from '../../Context/Context';

const Courses = () => {

    const AllCourses = useContext(authProvider);
    

    return (
        <div>
            <section className='info'>
                <div className='w-full my-10 bg-blue-400 custom text-center'>
                    <h1 className='text-white text-6xl p-10'>Course</h1>
                </div>
            </section>
            <section className='courses  flex justify-between mx-16 my-28 leading-loose text-xl' >
                <aside className='px-5 w-auto'>
                        <h2 className='text-4xl pb-3'>Subjects</h2>
                        <ul>
                            <li><Link to='/courses/business'>Business & Management</Link></li>
                            <li><Link to='/courses/computer'>Computer Science</Link></li>
                            <li><Link to='/courses/teaching'>Teaching</Link></li>
                            <li><Link to='/courses/history'>History</Link></li>
                            <li><Link to='/courses/literature'>Literature</Link></li>
                            <li><Link to='/courses/language'>Language</Link></li>
                            <li><Link to='/courses/all-courses'>All Courses</Link></li>
                            
                        </ul>
                </aside>
                <article className='ms-5 w-4/6'>
                        <Outlet context={[AllCourses]}></Outlet>
                </article>
            </section>
        </div>
    );
};

export default Courses;