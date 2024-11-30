import React from 'react'

import ArrowIcon from '../images/arrow-right.svg'

export default function Wine(props) {

    return (

        <div className="flex flex-col items-center lg:flex-row justify-between px-4 sm:px-10 mb-10 sm:mb-20 lg:mb-40 relative">
            <img className='bg-bgColor w-full sm:w-[400px] lg:w-[500px] h-auto lg:h-[600px] mb-10 lg:mb-0' src={props.image} alt="Image" />
            <div className='flex flex-col items-center lg:items-start lg:pl-10'>
                <h1 className='mb-4 text-2xl sm:text-3xl lg:text-4xl'>{props.title}</h1>
                <p className='max-w-full sm:max-w-[500px] text-lg sm:text-xl lg:text-2xl capitalize text-center lg:text-left'>{props.description}</p>
            </div>
            <button className={`mt-10 lg:mt-0 lg:absolute flex justify-between items-center gap-x-2 sm:gap-x-4 text-black py-2 sm:py-3 px-4 sm:px-6 bg-white text-textColor border-2 rounded-full ${props.buttonDirection}`}>
                Buy Now
                <img src={ArrowIcon} alt="Arrow" className="w-4 sm:w-6 h-4 sm:h-6" />
            </button>
        </div>
    )
}
