import React from 'react'

export default function Amount(props) {

    const handleChange = (event) => {
        const value = parseInt(event.target.value, 10);
        props.setAmount(value > 0 ? value : 0);
    }
    function handleAmount(event) {
        event.target.value == '-' ? props.setAmount(props.amount > 1 ? props.amount - 1 : 1) : props.setAmount(props.amount + 1)
    }
    return (
        <div className='flex text-center items-center'>
            <button onClick={handleAmount} className={`text-3xl mb-1 ${props.amount == 1 ? 'disabled cursor-auto' : ''}`} value='-'>-</button>
            <input type='text' className='w-12 text-center outline-none border rounded-lg mx-4' value={props.amount} onChange={handleChange}></input>
            <button onClick={handleAmount} className='text-2xl mb-1' value='+'>+</button>
        </div>
    )
}