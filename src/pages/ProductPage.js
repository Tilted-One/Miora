import React from 'react';
import { useLocation } from 'react-router-dom';

import Amount from '../components/Amount';
import Button from '../components/AdToCartButton';

export default function ProductPage(props) {

    const location = useLocation();
    const { wineInfo } = location.state || {};

    const [amount, setAmount] = React.useState(wineInfo.amount);
    return (
        <div>
            {wineInfo &&
                props.isMobile ?
                <div className='p-4 h-full mt-16 w-full flex flex-col'>
                    <img src={wineInfo.bottleImg} alt={wineInfo.title} className='w-[300px] h-[300px] mx-auto' />
                    <div className='w-full  p-4'>
                        <div className='flex flex-col'>
                            <h1 className='text-2xl  mb-2'>{wineInfo.title}</h1>
                            <div className='flex  justify-between gap-x-2 items-center'>
                                <h2 className='text-lg '>{wineInfo.brand}</h2>
                                <div className='flex gap-x-4'>
                                    {wineInfo.oldPrice && (
                                        <p className='text-lg  font-medium line-through text-gray'>
                                            {wineInfo.oldPrice}₾
                                        </p>
                                    )}
                                    <p className='text-lg  font-medium text-red'>
                                        {wineInfo.price}₾
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex  gap-x-6 justify-between w-full mt-6'>
                            <Amount amount={amount} setAmount={setAmount} />
                            <Button translations={props.translations} addToCart={props.addToCart} />
                        </div>
                        <div className='py-10 w-full'>
                            <p className='text-lg '>{wineInfo.description}</p>
                        </div>
                    </div>
                </div>
                :
                <div className='p-4 h-full mt-16 w-full flex'>
                    <img src={wineInfo.bottleImg} alt={wineInfo.title} className='w-2/4 max-w-auto max-h-[500px]' />
                    <div className='w-2/4 p-4'> <div className='flex flex-col'>
                        <h1 className='text-4xl mb-2'>{wineInfo.title}</h1>
                        <div className='flex justify-between gap-x-2 items-center'>
                            <h2 className='text-2xl'>{wineInfo.brand}</h2>
                            <div className='flex gap-x-4'> {wineInfo.oldPrice && (
                                <p className='text-xl font-medium line-through text-gray-500'>
                                    {wineInfo.oldPrice}₾
                                </p>)}
                                <p className='text-xl font-medium text-red-500'>
                                    {wineInfo.price}₾
                                </p>
                            </div>
                        </div>
                    </div>
                        <div className='flex gap-x-6 justify-between w-full mt-6'>
                            <Amount amount={amount} setAmount={setAmount} />
                            <div className='w-60'>
                                <Button translations={props.translations} addToCart={props.addToCart} />
                            </div> </div> <div className='py-10 w-auto'>
                            <p className='text-3xl'>{wineInfo.description}</p>
                        </div>
                    </div>
                </div>
            }
        </div >
    );
}

