import React from "react";

import ArrowIcon from '../../images/arrow-down.svg'

export default function ProductFilter(props) {

    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div className='flex flex-col w-full h-fit border-b-2 border-borderColor'>
            <button className='flex py-5 text-lg' onClick={toggleDropdown}>
                {props.filter.buttonName}
                <img
                    src={ArrowIcon}
                    id='arrow'
                    className={`ml-auto transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <div>
                <ul id="dropdown" className={`flex flex-col overflow-hidden transition-all duration-500 ${isDropdownOpen ? 'max-h-fit' : 'max-h-0'}`}>
                    {props.filter.names.map((item, index) => (
                        <label key={index} className='mb-4 cursor-pointer text-lg font-normal' htmlFor={item.id}>
                            <input name={item.id} type="checkbox" id={item.id} className='mr-2 cursor-pointer w-4 h-4' />
                            {item.labelName}
                        </label>
                    ))}
                </ul>
            </div>
        </div>
    );
}