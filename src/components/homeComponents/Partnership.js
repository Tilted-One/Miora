import React from 'react';

import MioraLogo from '../../images/MioraLogo.png'

export default function Partnership(props) {
    const partnership = {
        miora: MioraLogo,
        gewelli: MioraLogo,
        lionidzis_Jvari: MioraLogo,
        lionidzis: MioraLogo,
    };
    return (
        <section className='mt-24 px-4 sm:px-10 pb-10 sm:pb-20 flex flex-col justify-center'>
            <h1 className='text-2xl sm:text-4xl mb-6 sm:mb-10 text-center'>
                {props.translations.partnershipTitle}
            </h1>
            <div className={`${props.isMobile ? '' : 'flex justify-center'}`}>
                <div className={`flex mx-full overflow-x-auto gap-x-4 gap-y-4 items-center ${props.isMobile ? 'hide-scrollbar' : 'scroll-visible'}`}>
                    {Object.keys(partnership).map(key => (
                        <div key={key} className='flex-none w-60 h-auto text-white flex items-center justify-center'>
                            <img src={partnership[key]}></img>
                        </div>
                    ))}
                </div>
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
        </section>
    );
}

