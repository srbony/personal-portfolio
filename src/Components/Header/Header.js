import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {

    return (
        <div className='h-48 felx justify-center items-center'>
            <div>Hi I'M</div>

        </div>
       
        // <div className='h-48 flex justify-center items-center'>
        //     <p className='mb-12'>Hi I'M</p> 
        //     <p className='mt-12 text-2xl font-bold'>Morjina Sultana <br /> <span style={{ color: '', fontWeight: 'bold' }}>
        //         <Typewriter
        //         className="mt-12"
        //             words={['A MERN Stack Developer !',]}
        //             loop={5}
        //             cursor
        //             cursorStyle='|'
        //             typeSpeed={70}
        //             deleteSpeed={50}
        //             delaySpeed={1000}

        //         />

        //     </span> </p>
        // </div>
    );
};

export default Header;