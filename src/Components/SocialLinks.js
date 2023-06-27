import React from 'react';
import { FaGithub, FaLinkedinIn, FaFileAlt, } from "react-icons/fa";

import { HiMail } from "react-icons/hi";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkdin<FaLinkedinIn size={20}></FaLinkedinIn>
                </>
            ),
            href: 'https://www.linkedin.com/in/marjina-sultana/',
            style: 'rounded-tr-md'

        },
        {
            id: 2,
            child: (
                <>
                    Github<FaGithub size={20}></FaGithub>
                </>
            ),
            href: 'https://github.com/srbony',


        },
        {
            id: 3,
            child: (
                <>
                    Mail<HiMail size={20}></HiMail>
                </>
            ),
            href: 'mailto:srabonycse@gmail.com',


        },
        {
            id: 4,
            child: (
                <>
                    Resume<FaFileAlt size={20}></FaFileAlt>
                </>
            ),
            href: 'https://drive.google.com/file/d/1x237aUAg-hZFk76-WhPjEtbCt7fm25CS/view?usp=share_link',
            style: 'rounded-br-md',
            download: true

        },


    ]


    return (
        <div className=' lg:flex flex-col top-[50%] left-0 fixed '>

            <ul>
                {
                    links.map(({ link, id, style, child, href, download }) => <li
                        key={id}
                        className={"flex justify-between items-center px-4 w-40 h-14 bg-gray-600 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" + " " + style}>
                        <a
                            href={href}
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                            className='flex justify-between items-center w-full text-white hover:text-white '>

                            {
                                child
                            }
                        </a>
                    </li>)
                }

            </ul>
        </div>


    );
};

export default SocialLinks;