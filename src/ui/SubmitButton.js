import React, { useState } from 'react';

const SubmitButton = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleClick = () => {
        setIsSubmitted(true);
    };

    return (
        <button
            onClick={handleClick}
            className="bg-bordeActive hover:bordeHover text-white font-bold py-4 px-8 rounded-lg cursor-pointer"
        >
            {isSubmitted ? 'Submited' : 'Submit'}
        </button>
    );
};

export default SubmitButton;
