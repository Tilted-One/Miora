import React, { useState, useEffect } from 'react';
import ArrowUp from '../images/arrow-up.svg';

export default function UpToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 1000) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-10 right-10 w-12 h-12 bg-black border border-white rounded-full z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ display: isVisible ? 'block' : 'none' }}
        >
            <img className='mx-auto' src={ArrowUp} alt='Arrow Up' />
        </button>
    );
}
