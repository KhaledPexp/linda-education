import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Courses from '../components/Courses/Courses';
import Home from '../components/Home/Home';
import PopularCourse from '../components/PopularCourses/PopularCourse';
import Business from '../components/Courses/pages/Business';
import History from '../components/Courses/pages/History';
import Computer from '../components/Courses/pages/Computer';
import Literature from '../components/Courses/pages/Literature';
import Language from '../components/Courses/pages/Language';
import AllCourses from '../components/Courses/pages/AllCourses';
import Teaching from '../components/Courses/pages/Teaching';

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
                    element: <Courses></Courses>,
                    children: [
                        {
                            path:'/courses/business',
                            element:<Business></Business>
                        },
                        {
                            path:'/courses/computer',
                            element: <Computer></Computer>
                        },
                        {
                            path:'/courses/history',
                            element: <History></History>
                        },
                        {
                            path:'/courses/teaching',
                            element: <Teaching></Teaching>
                        },
                        {
                            path:'/courses/literature',
                            element: <Literature></Literature>
                        },
                        {
                            path:'/courses/language',
                            element: <Language></Language>
                        },
                        {
                            path:'/courses/all-courses',
                            element:<AllCourses></AllCourses>
                        }
                    ]
                },
                {
                    path: '/popular',
                    element: <PopularCourse></PopularCourse>
                }
            ]   
        },

])

export default routes;