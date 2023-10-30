import React from 'react';
import{FaArrowRight} from 'react-icons/fa';


const Blog = () => {
    return (
        <div>
            <div className='w-full my-10 bg-blue-400 custom text-center'>
            <h1 className='text-white text-6xl p-10'>Blog</h1>
        </div>
        <div className='mx-auto px-8 max-w-screen-lg grid grid-cols-2 gap-10 mt-16 justify-center max-lg:grid-cols-1'>
            <div className='shadow-md border rounded transition duration-300 transform p-5 hover:scale-105 group hover:shadow-xl'>
                <article className='rounded text-left p-2 flex justify-between items-center'>
                  <div>
                    <h2 className='text-2xl font-bold mb-5'>What is cors?</h2>
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
                    </div>
                  <div className='ps-5'>
                    <FaArrowRight></FaArrowRight>
                  </div>
                </article>
                
            </div>
            <div className='shadow-md border rounded transition duration-300 transform p-5 hover:scale-105 group hover:shadow-xl'>
                <article className='rounded text-left flex justify-between items-center p-2'>
                  <div>
                    <h2 className='text-2xl font-bold mb-5'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>We are using firebase to Authentication to allow users to sign in to out app using one or more sign-in methods, including email address and password, also social signing and sign up options available. Other Options are :</p>
                    <ul className='text-xl font-bold leading-relaxed mt-5'>
                        <li>MongoDB</li>
                        <li>Oracle Database.</li>
                        <li>Amazon Redshift</li>
                        <li>DataStax Enterprise.</li>
                        <li>Redis Enterprise Cloud.</li>
                    </ul>
                    </div>
                    <div className='ps-5'>
                         <FaArrowRight></FaArrowRight>
                    </div>
                </article>
                
            </div>
            <div className='shadow-md border rounded transition duration-300 transform p-5 hover:scale-105 group hover:shadow-xl'>
                <article className='rounded text-left flex justify-between items-center p-2'>
                  <div>
                    <h2 className='text-2xl font-bold mb-5'>How does the private route work?</h2>
                    <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property</p>
                  </div>
                  <div className='ps-5'>
                    <FaArrowRight></FaArrowRight>
                  </div>
                </article>
                
            </div>
            <div className='shadow-md border rounded transition duration-300 transform p-5 hover:scale-105 group hover:shadow-xl'>
                <article className='rounded text-left flex justify-between items-center p-2'>
                  <div>
                    <h2 className='text-2xl font-bold mb-5'>What is Node? How does Node work?</h2>
                    <p>The Node.js run-time environment includes everything you need to execute a program written in JavaScrip. Node.js came into existence when the original developers of JavaScript extended it from something you could only run in the browser to something you could run on your machine as a standalone application.</p>
                    <p className='py-5 font-bold'>1. Node.js Architecture: Node.js is made of Chrome V8 engine which is written in C++ and Libuv which is a multi-platform C library that provides support for asynchronous I/O based events on event loops and thread loops.</p>
                    <p className='font-bold'>2 Node.js Application: So now that, we have learned about the Node.js architecture, it’s time to learn how a Node.js application runs and this part includes the concept of Node.js being single-threaded and its non-blocking nature as well. So, first of all, what is a thread?</p>
                  </div>

                  <div className='ps-5'>
                         <FaArrowRight></FaArrowRight>
                  </div>
                </article>
                
            </div>
        </div>
        </div>
    );
};

export default Blog;