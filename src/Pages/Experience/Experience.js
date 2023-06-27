import React from 'react';
import html from '../../../src/assets/personalImage/html1.png';
import css from '../../../src/assets/personalImage/css.png';
import bootstrap from '../../assets/personalImage/bootstrap.jpg';
import tailwind from '../../assets/personalImage/tailwind.png';
import js from '../../../src/assets/personalImage/js.png';
import react from '../../assets/personalImage/react.png';
import express from '../../assets/personalImage/express.png';
import node from '../../../src/assets/personalImage/nodeJs.png';
import mongodb from '../../assets/personalImage/mongodb.png';
import netlify from '../../assets/personalImage/netlify.png';
import firebase from '../../assets/personalImage/firebase.png';
import Marquee from "react-fast-marquee";


const Experience = () => {
    const skills = [
        {
            id: 1,
            img: html,
            title: 'HTML',
            style: 'shadow-blue-500'

        },
        {
            id: 2,
            img: css,
            title: 'CSS',
            style: 'shadow-green-500'

        },
        {
            id: 3,
            img: js,
            title: 'JAVASCRIPT',
            style: 'shadow-sky-500'

        },
    ]
    return (
        <div className='bg-[#0c1022]  w-full h-screen'>

            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 p-2 inline border-green-600 text-green-600'>Skills</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>
                {/* <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-2 text-center py-8  sm:px-0'>

                    {
                        skills.map(({ id, img, title, style }) =>
                            <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg w-20 ${style}`} key={id} >
                                <img src={img} alt="" className='w-full mx-auto h-2/3' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        )
                    }

                </div> */}

                {/* practice */}

















                {/* <div className='skills'>
                {
                    skillSet?.map(({ icon, name }, index) => <div key={index} className='flex flex-col items-center hover:text-primary' data-aos="fade-up" data-aos-delay={`${((index) % 6) * 100 + 100}`}>
                        <div className='h-36 w-24 flex items-center justify-center rounded-3xl glow'>
                            <img src={icon} alt="icon" className='h-14 w-14 object-contain' />
                        </div>
                        <h1 className='text-center mt-4'>{name}</h1>
                    </div>)
                }
            </div> */}
            </div>
        </div>
    );
};

export default Experience;