import React from 'react'

export default function AdToCartButton(props) {
    const [isPressed, setIsPressed] = React.useState(false);

    const handleClick = () => {
        setIsPressed(true);
        props.addToCart(props.wineInfo);

        setTimeout(() => {
            setIsPressed(false);
        }, 1000);
    };
    return (
        <button
            className={`w-full h-10 rounded-lg border transition-colors duration-500 ${isPressed ? 'bg-green text-white border-green-500' : 'bg-white text-textColor border-bgColor'
                }`}
            onClick={handleClick}
        >
            {isPressed ? `${props.translations.added}` : `${props.translations.addtoCart}`}
        </button>
    )
}
