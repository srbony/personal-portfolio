
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'

const Nav = () => {
    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: 'home'

        },
        {
            id: 2,
            link: 'about'

        },
        {
            id: 3,
            link: 'projects'

        },
        {
            id: 4,
            link: 'skills'

        },
        {
            id: 5,
            link: 'contact'

        }
        // {
        //     id: 6,  
        //     link: 'blog'

        // }
    ]

    return (
        <div className='flex justify-between items-center w-full  h-20 px-4 fixed  z-30
        '>
            <div>
                <h2 className='text-4xl font-signature ml-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>Morjina</h2>
            </div>
            <ul className='hidden md:flex'>
                {
                    links.map(({ link, id }) => <li
                        key={id}


                        className='px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200
                        text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500
                        
                        ' >

                        {/* <Link to={link} spy={true} smooth={true} offset={50} duration={500}>  {link}</Link> */}
                        <Link to={link} smooth duration={500}>  {link}</Link>
                    </li>)
                }




            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4  z-10 md:hidden  '>
                {
                    nav ? <FaTimes size={25}></FaTimes> :
                        <FaBars size={25}></FaBars>
                }


            </div>

            {nav && (
                <ul className='flex justify-center items-center flex-col top-0 left-0 w-full h-screen absolute bg-gradient-to-b from-black to-gray-800 text-gray-800'>
                    {
                        links.map(({ link, id }) => <li
                            key={id}


                            className='px-4 cursor-pointer capitalize py-6 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500' >
                            {/* {link} */}
                            <Link
                                onClick={() => setNav(!nav)}
                                to={link} spy={true} smooth={true} offset={50} duration={500}>  {link}
                            </Link>
                        </li>)
                    }

                </ul>
            )}




        </div>
    );
};

export default Nav;