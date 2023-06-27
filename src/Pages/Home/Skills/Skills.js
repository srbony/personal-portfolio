import React from 'react';
import Marquee from "react-fast-marquee";
import html from '../../../assets/personalImage/html.png';
import css from '../../../assets/personalImage/css.png';
import js from '../../../assets/personalImage/js.png';
import react from '../../../assets/personalImage/react.png';
import express from '../../../assets/personalImage/express.png';
import node from '../../../assets/personalImage/nodeJs.png';
import mongodb from '../../../assets/personalImage/mongodb.png';
import firebase from '../../../assets/personalImage/firebase.png';
import netlify from '../../../assets/personalImage/netlify.png';
import vercel from '../../../assets/personalImage/vercel.png';


const Skills = () => {
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
        {
            id: 4,
            img: react,
            title: 'REACT',
            style: 'shadow-sky-500'

        },
        {
            id: 4,
            img: express,
            title: 'EXPRESS',
            style: 'shadow-sky-500'

        },
        {
            id: 5,
            img: node,
            title: 'NODE',
            style: 'shadow-sky-500'

        },
        {
            id: 6,
            img: mongodb,
            title: 'MongoDB',
            style: 'shadow-sky-500'

        },
        {
            id: 7,
            img: firebase,
            title: 'firebase',
            style: 'shadow-sky-500'

        },
        {
            id: 8,
            img: netlify,
            title: 'NETLIFY',
            style: 'shadow-sky-500'

        },
        {
            id: 9,
            img: vercel,
            title: 'vercel',
            style: 'shadow-sky-500'

        },
    ]
    return (
        <div name="skills"className='bg-[#0c1022] min-h-screen flex flex-col justify-center   '>

            <div className='max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full'>

                <div className=''>
                    <p className='text-4xl font-bold border-b-4 p-2 inline border-green-400 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>Skills</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>
                <div className='container'>
                    <div className='skill-scrol w-[100%] ml-4 mr-4'>
                        <Marquee
                            gradient={false}
                            speed={80}
                            // speed={0}
                            pauseOnHover={true}
                            pauseOnClick={true}
                            delay={0}
                            play={true}
                            direction="left"
                        >
                            {
                                skills.map(({ skill, id, title, img, style }) => <div
                                    key={id} skill={skill} title={title}
                                    className={`border  mx-6 rounded-3xl hover:border-green-500 ${style}`}
                                   
                                >
                                    

                                    <div className='  m-10 h-34 w-22 flex justify-center items-center glow'>
                                        <img src={img} alt="" className='object-contain h-14 w-14' />
                                    </div>

                                    <h3 className='text-center mt-4'>{title}</h3>
                                </div>)
                            }



                        </Marquee>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Skills;