import React from 'react'
import { useNavigate } from "react-router-dom";

import BgImage from '../../images/background.png'
import ArrowIcon from '../../images/arrow-right.svg'

export default function Hero(props) {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/Shop');
    }
    return (
        <section className='relative h-screen flex items-center justify-center z-10 text-white p-4 sm:p-10 bg-cover bg-center bg-bgColor'
            style={{ backgroundImage: `url(${BgImage})` }}
        >
            <h1 className='absolute top-1/2 transform -translate-y-1/2 z-10 text-3xl sm:text-7xl leading-normal font-bold w-64 sm:w-96 text-white text-center sm:text-left'>
                {props.translations.heroTitle}
            </h1>
            <p className="absolute bottom-24 left-4 sm:bottom-10 sm:left-10 w-64 sm:w-96 text-center sm:text-left text-sm sm:text-base">
                {props.translations.heroParagraph}
            </p>
            <button onClick={handleClick} className="absolute flex justify-between items-center gap-x-2 sm:gap-x-4 bottom-10 right-4 sm:right-10 text-black py-2 sm:py-3 px-4 sm:px-6 bg-white text-textColor rounded-full">
                {props.translations.shopNowButt}
                <img src={ArrowIcon} alt="Arrow" className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
        </section>
    )
}
