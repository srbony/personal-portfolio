import React from 'react';
import './About.css'
import { Link } from 'react-router-dom';
import image from '../../assets/personalImage/cover.jpg'

const About = () => {
    return (
        <div name="about">
            <div name="about" className='flex justify-between flex-wrap  items-center bg-[#0c1022] '>
                <div className='mt-20'>

                    <div className='flex max-w-screen-lg  justify-center lg:ml-20 items-center '>

                        {/* <div className='p-4 icons'>
                     
                    </div> */}
                        <div className='content ml-10'>

                            <h1 className='text-2xl font-bold   text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Hi! </h1>
                            <h2 className='text-3xl font-bold mb-2 '> I'M Morjina Sultana</h2>
                            {/* <h3 className='font-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>MERN Stack Developer</h3> */}
                            <p className='mb-6'>I'M a MERN stack developer and graduate from BGC Trust University in CSE,
                                I have developed both the functional and aesthetic components of client websites.I'M interested to coding. </p>


                            <a href="https://drive.google.com/file/d/1x237aUAg-hZFk76-WhPjEtbCt7fm25CS/view?usp=share_link"
                                className='text-white bg-gradient-to-b from-green-500 to-blue-500  w-[140px] h-[140px] px-8  py-3 rounded-md hover:scale-110 duration-300'

                            >
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
                <div className='header-img  lg:mr-20 flex flex-wrap bg-[#0c1022] mt-20'>
                    <div className='circle-img'>
                        <span></span>
                        <span></span>
                        <div className='image'>
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;