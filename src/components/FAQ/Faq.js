import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';



const Faq = () => {
    return (
        <div className='mx-16 my-14 flex justify-center'>
            <div className=' w-3/6 text-center'>
                <div >
                    <div className='flex justify-center my-16 '>
                        <Link className='mx-10 bg-sky-50 w-10 h-10 rounded-full '><svg className="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52"><polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon></svg></Link>
                    </div>
                    <h1 className='text-5xl font-bold pb-5'>FAQ Check Out this FAQ questions to Know your desired answer</h1>
                    <p className='my-5'>This section for the user who wants to know more about our courses or about our service. Feel free to check you the questions to get your answer.</p>

                    <div className='space-y-4 mt-16'>
                    <Item title="How do I take a Linda course?">
                        Linda courses are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop, laptop, and our mobile app.

                        After you enroll in a course, you can access it by clicking on the course link you will receive in your confirmation email (provided you’re logged into your Linda account). You can also begin the course by logging in and navigating to your My learning page.
                    </Item>
                    <Item title="Is there any way to preview a course?">
                        Yes! Learn how to preview a course, and review key information about it. This article outlines how you can search Linda’s ever-growing library, and find courses you’re interested in taking.
                    </Item>
                    <Item title="How can I pay for a course?">
                        Linda supports several different payment methods, depending on your account country and location.
                        Learn more about our payment methods.

                    </Item>
                    <Item title="What if I don’t like a course I purchased?">
                        We want you to be satisfied, so all eligible courses purchased on Linda can be refunded within 30 days. If you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy.
                    </Item>
                    <Item title="Where can I go for help?">
                        We want you to be satisfied, so all eligible courses purchased on Linda can be refunded within 30 days. If you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy.
                    </Item>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;