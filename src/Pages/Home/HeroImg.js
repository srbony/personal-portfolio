import React from 'react';
import img from '../../assets/personalImage/cover.jpg'

const HeroImg = () => {
    return (
        <div className='h-screen w-full  bg-[#0c1022]'>
            <div className='max-w-screen-lg mx-auto flex items-center justify-center h-full px-4'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='text-2xl font-bold   text-green-600'>Hi, I'm </h1>
                    <h2 className='text-5xl font-bold mb-2 '>Morjina Sultana</h2>
                    <h3 className='font-2xl font-bold  text-green-600 mb-2'>MERN Stack Developer</h3>
                    <p className='mb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    <div>
                        <button>Resume</button>
                    </div>
                </div>

                <div>
                    <img src={img} alt="" className='mx-auto w-2/3 md:w-full'/>
                </div>

            </div>

        </div>
    );
};

export default HeroImg;