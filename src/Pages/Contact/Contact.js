import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {




    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // form.current.reset();


        emailjs.sendForm(
            'service_vbx55xk',
            'template_ydy9tr3',
            form.current, 'DByF0CzDW7hmGRpWK')
            .then((result) => {
                console.log(result);

                toast.success('Message send successfully!');
                form.current.reset();




            }, (error) => {
                console.log(error.text);
            });
    };





    return (
        <div name="contact" className='bg-[#0c1022]  w-full h-screen sm:mb-48 '>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 p-2 inline border-green-400 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="" className='flex flex-col w-full md:w-1/2  lg:h-full'
                        ref={form} onSubmit={sendEmail}
                    >
                        <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-green-600' />
                        <input type="text" name="email" placeholder='Enter your email' className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-green-600' />
                        <textarea name="message" rows='5' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-green-600 ' placeholder='Enter your message' />
                        <button className='text-white bg-gradient-to-b from-green-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 '>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;