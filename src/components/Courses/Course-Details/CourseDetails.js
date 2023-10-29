import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';


const CourseDetails = () => {
   const singleCourse = useLoaderData();
   const singleCourseDetails = singleCourse[0];

   const myRef = useRef(null);
   const createPDF = useReactToPrint({
       content: () => myRef.current,
   });
   
   console.log(singleCourseDetails);
    return (
        <div>
            <section className='info'>
                <div className='w-full my-8 bg-blue-400 custom text-center'>
                    <h1 className='text-white text-6xl p-10'>{singleCourseDetails.category}</h1>
                </div>
            </section>
            <section className='courses-details  flex justify-center mx-16 my-16 p-5 leading-loose text-xl' >
                <div className='text-center mx-auto w-3/6'>
                     <button onClick={createPDF} className='btn rounded bg-amber-300 px-6 py-3 hover:bg-amber-200'>Download Course as Pdf</button>
                     <h1 className='text-5xl font-bold text-center mt-10'>{singleCourseDetails.name}</h1>
                     <p className='mt-10 leading-normal'>{singleCourseDetails.short_description}</p>
                     <div ref={myRef}>
                        <div className='shadow-md w-auto h-86 '><img className='rounded mt-10' src={singleCourseDetails.image} alt="" /></div>
                        <p className='mt-10 leading-normal'>{singleCourseDetails.details}</p>
                        <div className='mt-5 flex justify-center items-center w-auto mx-auto'>

                            <p className='ps-4'>Price: ${singleCourseDetails.price}</p>
                            <p className='ps-4'>{singleCourseDetails.reviews}</p>
                            <p className='ps-4'>Rating: {singleCourseDetails.rating}</p>
                        </div>
                        <div className='flex justify-center'><Link className='text-center'to={`/checkOut/${singleCourseDetails.id}`}><button className='flex justify-between items-center btn rounded bg-amber-300 px-6 py-3 hover:bg-amber-200 mt-5'>Get Prime Access <span className='ps-2'><FaArrowRight/></span></button></Link></div>
                     </div>
                </div>

            </section>
        </div>
    );
}

export default CourseDetails;