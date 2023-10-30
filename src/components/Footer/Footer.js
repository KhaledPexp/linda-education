import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
       <div className=' bg-sky-50 mt-28 max-lg:grid max-lg:grid-cols-1'>
                <div className='mx-16 mt-14 flex justify-around px-2 pt-10 pb-5 leading-relaxed max-sm:grid max-sm:grid-cols-2 max-sm:gap-y-5 max-sm:px-0 max-sm:mx-5 max-lg:block max-lg:mx-10 max-sm:mt-8 max-lg:mt-10'>
                <div className='w-2/6 p-3 max-sm:hidden max-lg:block max-lg:w-full'>
                    <div className='flex'>
                        <img className='w-1/5 max-lg:w-1/5 max-sm:hidden max-lg:inline-block' src="Images/logo.png" alt="" />
                        <p className='ps-4 max-lg:inline-block max-lg:px-5'>Linda - Improve Your Online Learning Experience Better Instantly. We have 50k+ Online courses & 600K+ Online registered student.Find your desired Courses from them.</p>
                    </div>
                
                </div>
                <div className='max-lg:inline-block max-lg:my-5 max-lg:p-4 max-sm:my-0'>
                    <ul> <p>Category</p>
                        <li><a href="">Computer Science</a></li>
                        <li><a href="">Teaching</a></li>
                        <li><a href="">Business and <br /> Management</a></li>
                        <li><a href="">Data Science</a></li>
                    </ul>
                </div>
                <div className='max-lg:inline-block max-lg:p-4'>
                    <ul> 
                        <p>Quick link</p>
                        <li><a href="">Courses</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Sing In</a></li>
                        <li><a href="">Sing Up</a></li>
                    </ul>
                </div>
                <br className='hidden' />
                <div className='max-lg:inline-block max-lg:p-4'>
                    <ul> 
                        <p>Help Center</p>
                        <li><a href="">Support</a></li>
                        <li><a href="">Get Help</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Educational</a></li>
                        <li><a href="">Projects</a></li>
                    </ul>
                </div>
                <div className='max-lg:inline-block max-lg:p-4'>
                    <ul>
                        <li>Contact Info</li>
                        <li>Address: Popelsdorf,</li>
                        <li>Bonn, 53115 NRW, </li>
                        <li>Germany</li>
                        <li>Call Us: +13072224726</li>
                        <li className='max-sm:hidden'>khaledmahmud.de@gmail.com</li>
                    </ul>
                </div>
               
            </div>
            
            <hr className=' border-blue-200 pb-5 mx-28 max-sm:mx-5 max-lg:mx-12'/>
            <div className='flex justify-between mx-28 pb-10 max-sm:mx-5 max-lg:mx-12'>
                <p className='text-sm'>@ Copyright 2023 KhaledPxp All Right Reserved!</p>
                <div className='flex justify-between w-28 max-sm:hidden max-lg:mx-5'>
                    <Link><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></Link>
                    <Link className='max-lg:mx-5'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></Link>
                    <Link><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></Link>
                </div>
            </div>
       </div>
    );
};

export default Footer;