import React from 'react';
import Amount from '../Amount';
import DeleteIcon from '../../images/trash.svg';
import { useRecoilState } from 'recoil';
import cardState from '../../state/cardState';

const initialState = [];

function reducer(state, action) {
    switch (action.type) {
        case 'SET_AMOUNT':
            return state.map((item, index) =>
                index === action.index ? { ...item, amount: action.amount } : item
            );
        case 'SET_CART_ITEMS':
            return action.cartItems.map(item => ({ ...item, amount: item.amount || 0 }));
        default:
            return state;
    }
}

export default function CartProduct(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const [amount, setAmount] = React.useState(props.amount);
    const [card, setCard] = useRecoilState(cardState)

    React.useEffect(() => {
        dispatch({ type: 'SET_CART_ITEMS', cartItems: props.cartItems });
    }, [props.cartItems]);

    React.useEffect(() => {
        const totalCost = state.reduce((acc, item) => acc + (item.price * item.amount), 0);
        props.setProductPrice(totalCost);
        props.setItemTotalCost(totalCost);
    }, [state]);

    const handleAmountChange = (id, newAmount) => {
        setCard(card.map(i => (i.id !== id ? i : {...i, amount: newAmount})))
    };

    return (
        <div className='flex flex-col w-full'>
            {props.isMobile ? (
                <div>
                    {state.map((item, index) => (
                        <div key={index} className={`flex flex-col items-center py-4 ${index === 0 ? 'border-t-0' : ''} ${index === state.length - 1 ? 'border-b-2 border-gray' : 'border-b-2 border-gray'}`}>
                            <img src={item.bottleImg} alt={item.title} className='w-auto' />
                            <div className='w-full h-full flex flex-col justify-between px-2'>
                                <div className='w-full flex justify-between items-start'>
                                    <h1>{item.title}</h1>
                                    <Amount amount={item.amount} setAmount={(newAmount) => handleAmountChange(index, newAmount)} />
                                </div>
                                <div className='w-full flex justify-between items-end'>
                                    <button className='flex items-center' onClick={() => props.removeFromCart(item.id)}>
                                        <img src={DeleteIcon} alt="Delete" className='inline-block mr-2' />
                                        {props.translations.delete}
                                    </button>
                                    <div className='flex items-center'>
                                        <h1>{item.price} ₾</h1>
                                        <span className='w-px h-6 bg-gray mx-2'></span>
                                        <h1>{item.price * item.amount} ₾</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='flex flex-col w-full'>
                    {state.map((item, index) => (
                        <div key={index} className={`flex py-6 ${index === 0 ? 'border-t-0' : ''} ${index === state.length - 1 ? 'border-b-2 border-gray' : 'border-b-2 border-gray'}`}>
                            <img src={item.bottleImg} alt={item.title} className='w-32' />
                            <div className='w-full h-full flex flex-col justify-between ml-4'>
                                <div className='w-full flex justify-between items-start'>
                                    <h1>{item.title}</h1>
                                    <Amount amount={card.find(i=>i.id === item.id).amount} setAmount={(newAmount) => handleAmountChange(item.id, newAmount)} />
                                </div>
                                <div className='w-full flex justify-between items-end'>
                                    <button className='flex items-center' onClick={() => props.removeFromCart(item.id)}>
                                        <img src={DeleteIcon} alt="Delete" className='inline-block mr-2' />
                                        {props.translations.delete}
                                    </button>
                                    <div className='flex items-center'>
                                        <h1>{item.price} ₾</h1>
                                        <span className='w-px h-6 bg-gray mx-2'></span>
                                        <h1>{item.price * item.amount} ₾</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
