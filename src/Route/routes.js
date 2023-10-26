import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Courses from '../components/Courses/Courses';
import Home from '../components/Home/Home';

const routes = createBrowserRouter([
        {
            path : '/',
            element:<Main></Main>, 
            children:[
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/courses',
                    element: <Courses></Courses>
                }
            ]   
        },

])

export default routes;