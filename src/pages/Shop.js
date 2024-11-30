import React from 'react'

import ShopComp from '../components/shopComponents/ShopComp'

export default function Home(props) {
    return (
        <div className='mt-16 flex flex-col justify-center'>
            <ShopComp
                cartAmount={props.cartAmount} setCartAmount={props.setCartAmount}
                cartItems={props.cartItems} setCartItems={props.setCartItems}
                translations={props.translations}
                language={props.language}
                addToCart={props.addToCart}
                isMobile={props.isMobile}
            />
        </div>
    )
}
