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
import CheckOut from '../components/AuthCompoents/CheckOut';
import PrivateRoutes from './PrivateRoutes';
import UserProfile from '../components/UserProfile/UserProfile';
import ErroPage from '../components/ErrorPage/ErroPage';


const routes = createBrowserRouter([
        {
            path : '/',
            element:<Main></Main>, 
            children:[
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () =>  fetch('https://linda-edu-ehqll0g22-khaled-mahmuds-projects.vercel.app/category/01')
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
                    loader: ({params}) => fetch(`https://linda-edu-ehqll0g22-khaled-mahmuds-projects.vercel.app/course/${params.id}`)
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
                },
                {
                    path:'/checkOut/:id',
                    element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                    loader: ({params}) => fetch(`https://linda-edu-ehqll0g22-khaled-mahmuds-projects.vercel.app/checkOut/${params.id}`)
                },
                {
                    path:'/userProfile',
                    element:<UserProfile></UserProfile>
                }
                
            ]   
        },
        {
            path:'*',
            element: <ErroPage></ErroPage>
        }

])

export default routes;