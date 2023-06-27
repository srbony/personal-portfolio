import React from 'react';
import { Link } from 'react-router-dom';

const LeftHoverCard = () => {
    return (
        <div>
            <div class="container">
                <h3 class="title">Text fadeIn left</h3>
                <div class="content">
                    <Link href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank" >
                        <div class="content-overlay"></div>
                        <img class="content-image" src="https://source.unsplash.com/HkTMcmlMOUQ" alt="" />
                        <div class="content-details fadeIn-left left-[20%]">
                            <h3>This is a title</h3>
                            <p>This is a short description</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default LeftHoverCard;