import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Amount from '../Amount'

import AdToCartButton from '../AdToCartButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import cardState from '../../state/cardState';
import dataState, { manufacturersDataState } from '../../state/dataState';
import Translator from '../../translate/Translator';

export default function Card(props) {
    const product = props.product;
    const [amount, setAmount] = React.useState(1);
    const [card, setCard] = useRecoilState(cardState)
    const manufacturers = useRecoilValue(manufacturersDataState)
    const manufacturer = manufacturers.find(m => product.specValueIds.includes(m.id));

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/product_page', { state: { product: product } });
    };

    const handleAddToCartClick = (wineInfo) => {
        const item = card.find(i => i.id === wineInfo.id);
        if (item) {
            console.log(wineInfo)
            setCard(card.map(i => (i.id !== item.id ? i : { ...i, amount: i.amount + wineInfo.amount })))
        } else {
            setCard([...card, { id: wineInfo.id, amount: wineInfo.amount }])
        }
        props.addToCart(wineInfo)
        setAmount(1)
    }

    return (
        <div className='w-[300px] h-fit min-h-[380px] mb-8 px-4 flex flex-col items-justify'>
            <div className='p-4 h-full bg-white shadow'>
                <div className='w-full'>
                    <div onClick={handleClick} className='cursor-pointer'>
                        <img src={props.bottleImg} alt={props.title} className='w-full' />
                        <h1 className='text-lg font-semibold mt-2'><Translator name={'name'}  item={product}/></h1>
                    </div>
                    <div className='flex justify-between w-full items-center mb-2'>
                        <h2 className='font-normal'>{manufacturer && <Translator name={'name'} item={manufacturer}/>}</h2>
                        <div className='flex gap-x-4  my-2'>
                            {product.priceNew ? (
                                <h1 className='text-lg font-medium line-through opacity-70'>
                                    {product.priceOld}₾
                                </h1>
                            )
                                :
                                (
                                    <h1 className='text-xl font-medium text-bordeActive'>
                                        {product.priceOld}₾
                                    </h1>
                                )

                            }
                            <h1 className='text-xl font-medium text-bordeActive'>
                                {product.priceNew}₾
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='flex w-full justify-between gap-x-4'>
                    <Amount amount={amount} setAmount={setAmount} />
                    <AdToCartButton cartItems={props.cartItems} setCartItems={props.setCartItems} product={product} addToCart={handleAddToCartClick} translations={props.translations} />
                </div>
            </div>
        </div>
    )
}