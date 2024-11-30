import React from 'react'
import CartProduct from '../components/cartComponents/CartProduct'
import CartCheckout from '../components/cartComponents/CartCheckout'


export default function Cart(props) {
    const [productPrice, setProductPrice] = React.useState(0)
    const [itemTotalCost, setItemTotalCost] = React.useState(0)

    return (
        <div className={`mt-20  flex gap-x-20 ${props.isMobile ? 'flex-col p-2 gap-y-16' : 'p-10'}`}>
            <CartProduct
                removeFromCart={props.removeFromCart}
                translations={props.translations}
                cartItems={props.cartItems} setCartItems={props.setCartItems}
                cartAmount={props.cartAmount} setCartAmount={props.setCartAmount}
                productPrice={productPrice} setProductPrice={setProductPrice}
                itemTotalCost={itemTotalCost} setItemTotalCost={setItemTotalCost}
                isMobile={props.isMobile}
            />
            <CartCheckout
                productPrice={productPrice} setProductPrice={setProductPrice}
                translations={props.translations}
                isMobile={props.isMobile}
            />
        </div >
    )
}