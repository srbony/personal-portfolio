import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Nabvar = () => {
    const menuItems = < >
        <li> <Link to='/home'>Home</Link> </li>
        <li> <Link to='/about'>About</Link> </li>
        <li> <Link to='/my projects'>Projects</Link> </li>
        <li> <Link to='/blog'>Blog</Link> </li>
        <li> <Link to='/contact'>Contact</Link> </li>


    </>
    return (

        <div className="navbar  fixed z-30 ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
               
                <Link to='/home' className=' font-bold text-3xl
                text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500
                '>Morjina</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Nabvar;