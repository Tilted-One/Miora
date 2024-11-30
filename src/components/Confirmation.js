import React from "react";
import BgImage from '../images/background.png';

export default function Confirmation(props) {
    const [ageControl, setAgeControl] = React.useState(true);
    
    return (
        <div className="w-full h-full flex" style={{ position: 'relative' }}>
            <div
                className="w-full h-full absolute"
                style={{
                    backgroundImage: `url(${BgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.7,
                    zIndex: 0,
                }}
            />
            <div className="w-full h-full flex items-center justify-center px-2" style={{ position: 'relative', zIndex: 1 }}>
                {ageControl ? (
                    <div className="w-full max-w-md mx-auto my-auto flex flex-col justify-center items-center bg-white p-6 rounded-lg capitalize">
                        <div className="bg-black w-full h-36 mb-6"></div>
                        <h2 className="text-2xl font-semibold mb-2 text-center">{props.translations.warning}</h2>
                        <p className="mb-4 px-4 text-sm text-center">{props.translations.text}</p>
                        <p className="text-center">{props.translations.question}</p>
                        <div className="flex flex-col justify-center gap-x-10 sm:flex-row mt-6 gap-4 w-full px-4">
                            <button
                                className="w-full sm:w-auto px-10 py-2 bg-white text-green text-lg font-bold border-2 border-green rounded-lg"
                                onClick={() => props.setShowMineContent(false)}
                            >
                                {props.translations.yes}
                            </button>
                            <button
                                className="w-full sm:w-auto px-10 py-2 bg-white text-red text-lg font-bold border-2 border-red rounded-lg"
                                onClick={() => {
                                    props.setShowMineContent(true);
                                    setAgeControl(false);
                                }}
                            >
                                {props.translations.no}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="w-full max-w-md mx-auto my-auto flex flex-col justify-center items-center bg-white p-6 rounded-lg capitalize">
                        <div className="bg-black w-full h-36 mb-6"></div>
                        <h1 className="text-sm mb-2 px-4 text-center">{props.translations.negativeText}</h1>
                    </div>
                )}
            </div>
        </div>
    );
}
