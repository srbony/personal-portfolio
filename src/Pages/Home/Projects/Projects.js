import React, { useState } from 'react';
import { HiLink, FaLinkedinIn, FaFile, FaWhatsapp } from "react-icons/hi";
import quiz from '../../../assets/personalImage/QUERY.PNG';
import quiz1 from '../../../assets/personalImage/QUERY.PNG';
import quiz2 from '../../../assets/personalImage/QUERY.PNG';
import havenly from '../../../assets/personalImage/HAVENLY.PNG';
import havenly1 from '../../../assets/personalImage/HAVENLY.PNG';
import havenly2 from '../../../assets/personalImage/HAVENLY.PNG';
import learning from '../../../assets/personalImage/learning.PNG';
import learning1 from '../../../assets/personalImage/learning.PNG';
import learning2 from '../../../assets/personalImage/learning.PNG';



import Modal from '../../../Components/Modal/Modal';
import Project from '../../Project';


const Projects = () => {
    const [modalData, setModalData] = useState([]);

    const projects = [
        {
            id: 1,
            title: 'Havenly',
            img: havenly,
            fetures: ['Designed using Tailwind(Daisy UI) and Developed using React.js Express.js, MongoDB,and Node.js', 'Users can make payments through our website, we have used stripe. Paid advertisement,Website Review CURD option, And Apartment review option. we implemented the JWT token. Users can search for their desired apartments.', 'Used firebase for authentications(email, pass, and google log-in). DarkMode, Sending invoices to that particular client’s email. Verified seller option, wishlist, and Reported items.'],
            client: 'https://github.com/devmonika/Havenly-client',
            server: 'https://github.com/devmonika/Havenly-server',
            live: 'https://havenly-de0a6.web.app/',
            technologies: ['React', 'Tailwind', ' MongoDB', 'firebase', 'express', ' node'],
            images: [havenly1, havenly2],
            github: ''

        },
        {
            id: 2,
            title: 'Quizy platform',
            img: quiz,
            fetures: ['Designed using Tailwinds, Developed using react js. There are 4 pages in this project.', 'There are separate sections for each topic. There is a chart included in this project which indicates the number of questions. And a view icon that shows the correct answer to the questions.', 'Used react-router-dom for routing, react-testify for notifications, and recharts for showing a chart.'],
            client: 'https://github.com/srbony/quiz-crackerz-assignment',
            server: '',
            live: 'https://preeminent-starburst-579dc9.netlify.app/',
            technologies: ['React', 'Tailwind', ' MongoDB', 'firebase',],
            images: [quiz1, quiz2],
            github: ''
        },
        {
            id: 3,
            title: 'Learning  platform',
            img: learning,
            fetures: ['Designed using Tailwinds, Developed using react js. There are 4 pages in this project.', 'Any user logs in they show courses and courses details and category', 'User register, login, private route'],
            client: 'https://github.com/srbony/learning-platform-client-side',
            server: 'https://github.com/srbony/learning-platform-server-side',
            live: 'https://silver-ganache-78ae5d.netlify.app/',
            github: '',
            images: [learning1, learning2],
            technologies: ['React', 'Tailwind', ' MongoDB', 'firebase', 'express', 'node.js']
        },

    ]
    return (

        <div name="projects" className='min-h-screen  flex flex-col justify-center   bg-[#0c1022] '>


            <div className=' max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full '>


                <div className='pb-8'>

                    <p className='text-4xl mb-2 font-bold inline border-b-4 border-green-400 first-letter
                    text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500
                    '>Projects</p>
                    <p className='py-6'>Check out some of my work right here</p>

                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>


                    {
                        projects?.map(project => <Project
                            key={project.id}
                            project={project}
                            setModalData={setModalData}
                        ></Project>)
                    }




                </div>
                <Modal
                    modalData={modalData}
                    setModalData={setModalData}
                ></Modal>



            </div>



        </div>

    );
};

export default Projects;