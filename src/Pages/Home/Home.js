import React from 'react';

import Projects from './Projects/Projects';



import Skills from './Skills/Skills';
import Nav from '../../Components/Nav';

import SocialLinks from '../../Components/SocialLinks';
import Contact from '../Contact/Contact';
import About from '../../Components/About/About';
import Header from '../../Components/Header/Header';import Blog from '../../Components/Blog';




const Home = () => {
    return (
        <div className=''>
            <Nav id="link"></Nav>

            {/* <Header></Header> */}
            <About></About>
            <SocialLinks></SocialLinks>

            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
            {/* <Blog></Blog> */}


        </div>
    );
};

export default Home;