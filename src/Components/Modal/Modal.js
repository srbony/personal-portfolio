import React from 'react';
import '../Modal/Modal.css';

import { BiCheck } from "react-icons/bi";
import { HiCode, HiServer } from 'react-icons/hi';
import { GrGithub } from 'react-icons/gr'
import { BsCamera } from 'react-icons/bs'
import { MdOutlineFeaturedPlayList } from 'react-icons/md'

const Modal = ({ modalData }) => {
    console.log(modalData);
    const { title, img, fetures, client, server, live, technologies, images } = modalData;
    // console.log(client)
    console.log(fetures);

    return (
        <div className=' '>


            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal   ">
                <div className="modal-box bg-[#0c1022] w-11/12 max-w-5xl relativen border-green-600 border ">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 bg-green-600 border-none hover:bg-green-600">✕</label>

                    <div className='flex my-6 justify-between lg:pr-8 pr-3'>

                        <h3 className="font-bold text-lg text-green-400 ">{title}!</h3>

                        <a href={live} target="_blank" rel='noreferrer' className='btn mr-6 btn-sm rounded-full px-5 normal-case transition duration-300 hover:bg-green-400 bg-gradient-to-b from-green-500 to-blue-500 '>Live Site</a>


                    </div>


                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                        <div>

                            <div>
                                <h2 className='mb-4 flex items-center gap-2 text-white text-xl'> <MdOutlineFeaturedPlayList className='text-green-500' />Key Features</h2>

                                <ul className=''>
                                    {
                                        fetures?.map((feature, index) => <li className='text-sm flex items-start gap-2 mb-2' key={index}>
                                            <span className='h-4 w-4 '>
                                                <BiCheck
                                                    className=' border-green-500 text-white bg-green-500 rounded-xl' >
                                                </BiCheck >
                                            </span>
                                            {feature}
                                        </li>)
                                    }
                                </ul>

                            </div>

                        </div>


                        <div className='ml-12'>
                            <h2 className='mb-4 flex items-center gap-2  text-xl text-white '><HiCode className='text-green-500' />Technology</h2>
                            <div className='flex flex-wrap gap-2 text-black'>


                                {
                                    technologies?.map((tech, i) => <span
                                        className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg text-white border-2 border-cyan-600 px-4'
                                        key={i}>{tech}</span>)
                                }
                            </div>

                            {/* github link */}
                            <div>
                                <h2 className='mb-4 flex items-center gap-2 text-white mt-10 text-xl'><GrGithub className='text-green-500' />Source Code</h2>
                                <div className="flex gap-4 items-center">
                                    {client?.length > 0 && <a href={client} target="_blank" rel='noreferrer' className=' flex gap-1 justify-center items-center'>
                                        <GrGithub className='text-green-500' />Client Side</a>}
                                    {server?.length > 0 && <a href={server} target="_blank" rel='noreferrer' className=' flex items-center gap-1'><HiServer className='text-green-500' />Server Side</a>}
                                </div>
                            </div>


                        </div>






                        <div>
                            <h2 className='mb-4 flex items-center gap-2 text-white text-xl'><BsCamera />Project images</h2>

                            <div className=''>
                                {
                                    images?.map((image, i) => <div key={i}>
                                        <img src={image} alt="" className='w-1/2 h-1/2 my-6 rounded-md border-white object-contain cursor-pointer hover:scale-105 transition duration-300 ' />
                                    </div>)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Modal;