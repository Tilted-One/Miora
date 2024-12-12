import React from "react";

export default function CartCheckout(props) {

    const [CourierService, setCurierService] = React.useState(5)
    const [total, setTotal] = React.useState(0)
    const [name, setName] = React.useState('')
    const [secondName, setSecondName] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [secondPhoneNumber, setSecondPhoneNumber] = React.useState('');
    const [address, setAddress] = React.useState('');

    const [isChecked, setIsChecked] = React.useState(false)

    React.useEffect(() => {
        setTotal(props.productPrice + CourierService);
    }, [props.productPrice, CourierService]);

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setPhoneNumber(value);
        }
    };

    const handleSecondPhoneNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setSecondPhoneNumber(value);
        }
    };
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    }
    let courierService = 5

    return (
        <div className='w-full sm:w-2/3 lg:w-1/3 h-auto flex flex-col mx-auto px-4 sm:px-0 sm:mb-16'>
            <ul className="flex flex-col gap-y-4">
                <li className="w-full flex justify-between">
                    {props.translations.total}
                    <div className="flex items-center">
                        <p>{props.productPrice}₾</p>
                    </div>
                </li>
                <li className="w-full flex justify-between">
                    {props.translations.courierService}
                    <div className="flex items-center">
                        <p>{courierService}₾</p>
                    </div>
                </li>
                <span className="w-full h-px bg-gray"></span>
                <li className="w-full flex justify-between">
                    <p className="font-bold">{props.translations.totalSum}</p>
                    <p className="font-bold">{props.productPrice + courierService}₾</p>
                </li>
            </ul>
            <ul className="flex flex-col gap-y-6 mt-10">
                <li className="flex flex-col">
                    <label htmlFor="name" className="mb-1 text-sm">{props.translations.name}Name and lastname</label>
                    <input
                        id="name"
                        type="text"
                        className="border border-gray rounded p-2 outline-none"
                        value={name}
                        placeholder='Name and lastname'
                    />
                </li>
                <li>
                    <input className='w-4 h-4 mr-2' type="checkbox" name="secondCheckbox" onChange={handleCheckboxChange} id='secondCheckbox'></input>
                    <label htmlFor="secondCheckbox">Another person will take over.</label>
                </li>
                {isChecked &&
                    <li className="flex flex-col">
                        <label htmlFor="secondName" className="mb-1 text-sm">Second name</label>
                        <input
                            id="secondName"
                            type="text"
                            className="border border-gray rounded p-2 outline-none"
                            value={secondName}
                            placeholder='Name and lastname'
                        >
                        </input>
                    </li>
                }
                <li className="flex flex-col">
                    <label htmlFor="phoneNumber" className="mb-1 text-sm">{props.translations.phoneNum}</label>
                    <input
                        id="phoneNumber"
                        type="tel"
                        className="border border-gray rounded p-2 outline-none"
                        value={phoneNumber}
                        onChange={props.handlePhoneNumberChange}
                        placeholder={props.translations.phoneNumPlaceHolder}
                    />
                </li>
                <li className="flex flex-col">
                    <label htmlFor="secondPhoneNumber" className="mb-2 text-sm">{props.translations.phoneNumSec}</label>
                    <input
                        id="secondPhoneNumber"
                        type="tel"
                        className="border border-gray rounded p-2 outline-none"
                        value={secondPhoneNumber}
                        onChange={props.handleSecondPhoneNumberChange}
                        placeholder={props.translations.phoneNumSecPlaceHolder}
                    />
                </li>
                <li className="flex flex-col">
                    <label htmlFor="address" className="mb-2 text-sm">{props.translations.address}</label>
                    <input
                        id="address"
                        type="text"
                        className="border border-gray rounded p-2 outline-none"
                        value={address}
                        onChange={(e) => props.setAddress(e.target.value)}
                        placeholder={props.translations.addressPlaceHolder}
                    />
                    <labell className='text-sm text-gray mt-2'>{props.translations.addressInfo}</labell>
                </li>
            </ul>
            <button className={`bg-bordeActive py-2 px-6 text-white rounded-lg mt-4 ${props.isMobile ? 'mb-10' : ''}`}>
                {props.translations.payment}
            </button>
        </div>
    )
}
