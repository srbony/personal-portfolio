import React from 'react';
import { Link } from 'react-router-dom';
import havenly from '../../../assets/personalImage/HAVENLY.PNG';
import quiz from '../../../assets/personalImage/QUERY.PNG';


const Portfolio = () => {
    const categories = [
        {
            id: 1,
            img: havenly
        },
        {
            id: 2,
            img: quiz
        }
    ]
    return (
        <div className="min-h-screen  flex flex-col justify-center py-6 sm:py-12 bg-[#0c1022]">
            <div className='p-6 container mx-auto'>
                <div className='md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12'>
                    <article class="p-6 mb-6  border-green-600 border-2 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                        <Link className='absolute opacity-0 top-0 right-0 left-0 bottom-0'></Link>

                        <div class="relative mb-4 rounded-2xl">
                            <img class="max-h-80 rounded-2xl  w-full object-cover transition-transform duration-300 transform group-hover:scale-105" src={quiz} alt="" />
                            <Link class=" bg-[#0c1022] bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105  group-hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">

                                
                                <h1 className='ml-10 text-green-500 text-xl py-4'>Quiz platform</h1>
                                <p className='ml-10 '>Quiz platform website</p>
                                <div className='ml-10 flex mt-20'>
                                    <Link className='w-[100px] h-[30px] justify-center items-center flex rounded-full bg-green-400 '>Live Site</Link>
                                    <Link className='ml-4 w-[100px] h-[30px] justify-center items-center flex rounded-full hover:bg-green-400 bg-white text-[green] 
                                    hover:text-white'> Details</Link>
                                </div>
                            </Link>
                           
                        </div>



                    </article>
                </div>

            </div>

        </div>
    );
};

export default Portfolio;