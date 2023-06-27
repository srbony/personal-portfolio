import React from 'react';
import { Link } from 'react-scroll/modules';
import Modal from '../Components/Modal/Modal';

const Project = ({ project, setModalData }) => {
    const { id, img, title, live } = project;
    console.log(project);
    return (
        <article class="p-6 mb-6  border-white border-2 transition duration-300 group transform hover:border-green-500 hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer" >
            <Link className='absolute opacity-0 top-0 right-0 left-0 bottom-0 '>

            </Link>


            <div class="relative mb-4 rounded-2xl">

                <img class="max-h-80 rounded-2xl  w-full object-cover transition-transform duration-300 transform hover:bg-gray-800 group-hover:scale-105" src={img} alt="" />

                <div class=" bg-gray-900 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105  group-hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">


                    <h1 className='ml-10 text-green-500 text-xl py-4'>{title}</h1>
                    <p className='ml-10 '>Quiz platform website</p>
                    <div className='ml-6 flex mt-10'>
                        <a href={live} target="_blank" rel='noreferrer' className='w-[100px] h-[30px] justify-center items-center flex rounded-full bg-green-400 '>Live Site</a>


                        <label htmlFor="my-modal-3" onClick={() => setModalData(project)} className=" ml-4 w-[100px] h-[30px] justify-center items-center flex rounded-full hover:bg-green-400 bg-white text-[green] hover:text-white ">Details</label>

                    </div>


                </div>




            </div>


        </article>
    );
};

export default Project;