import React from 'react';
import { categoriesDataState } from '../../state/dataState';
import { useRecoilValue } from 'recoil';
import Translator from '../../translate/Translator';

export default function Type(props) {
    const categories = useRecoilValue(categoriesDataState)

    return (
        <div>
            <div className={`h-16 ${props.isMobile ? 'overflow-x-scroll flex gap-x-10 px-10 hide-scrollbar overscroll-x-contain w-auto' : 'w-[600px] rounded-full mt-8 mx-auto content-center flex gap-x-6 '}`}>
                {categories.map((button) => (
                    <button
                        key={button.id}
                        onClick={() => props.setActiveFilter(button)}
                        className={`w-full h-full text-black hover:border-b-2 hover:border-bordeHover ${props.activeFilter.id === button.id ? 'border-b-2 border-bordeActive' : ''}`}
                    >
                        <Translator item={button} name={'name'}/>
                    </button>
                ))}
            </div>
            <style>
                {`
         .hide-scrollbar::-webkit-scrollbar {
             display: none;
         }
         .hide-scrollbar {
             -ms-overflow-style: none; /* IE and Edge */
             scrollbar-width: none; /* Firefox */
         }
         .scroll-visible {
             scrollbar-width: thin;
         }
     `}
            </style>
        </div>
    );
}