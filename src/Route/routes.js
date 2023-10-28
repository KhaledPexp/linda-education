import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Courses from '../components/Courses/Courses';
import Home from '../components/Home/Home';
import Business from '../components/Courses/pages/Business';
import History from '../components/Courses/pages/History';
import Computer from '../components/Courses/pages/Computer';
import Literature from '../components/Courses/pages/Literature';
import Language from '../components/Courses/pages/Language';
import AllCourses from '../components/Courses/pages/AllCourses';
import Teaching from '../components/Courses/pages/Teaching';
import Faq from '../components/FAQ/Faq';
import Blog from '../components/Blog/Blog';
import CourseDetails from '../components/Courses/Course-Details/CourseDetails';
import Login from '../components/AuthCompoents/Login';
import SignUp from '../components/AuthCompoents/SignUp';

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
                            path:'/courses',
                            element:<AllCourses></AllCourses>
                        },
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
                        },

                    ]
                },
                {
                    path:'/course-details/:id',
                    element: <CourseDetails></CourseDetails>,
                    loader: ({params}) => fetch(`http://localhost:8080/course/${params.id}`)
                },
                {
                    path:'/faq',
                    element: <Faq></Faq>
                },
                {
                    path:'/blog',
                    element: <Blog></Blog>
                },
                {
                    path:'/signIn',
                    element:<Login></Login>
                },
                {
                    path:'/signUp',
                    element:<SignUp></SignUp>
                }
            ]   
        },

])

export default routes;