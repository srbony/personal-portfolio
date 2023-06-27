import React from 'react';

const SingleCard = ({ project }) => {
    const { img, } = project;
    return (

        <div class="relative overflow-hidden">
            <img class=" card w-96 bg-base-100 shadow-xl image-full" src={img} alt="" />
            <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class="bg-black text-white py-2 px-5">Add to cart</button>
            </div>
        </div>
    );
};

export default SingleCard;