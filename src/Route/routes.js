import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Courses from '../components/Courses/Courses';
import Home from '../components/Home/Home';
import PopularCourse from '../components/PopularCourses/PopularCourse';

const routes = createBrowserRouter([
        {
            path : '/',
            element:<Main></Main>, 
            children:[
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () =>  fetch('http://localhost:8080/category/01')
                },
                {
                    path: '/courses',
                    element: <Courses></Courses>
                },
                {
                    path: '/popular',
                    element: <PopularCourse></PopularCourse>
                }
            ]   
        },

])

export default routes;