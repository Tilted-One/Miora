import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='bg-bgColor mt-auto px-10 py-10 text-white flex justify-between w-full'>
            <div>
                <Link to="/" className="hover:text-gray">Home</Link>
            </div>
            <div>
                <Link to="/shop" className="hover:text-gray">Shop</Link>
            </div>
            <div>
                <Link to="/about-us" className="hover:text-gray">About </Link>
            </div>
            <div>
                <Link to='/cart' className='hover:text-gray' >Cart</Link>
            </div>
        </footer>
    )
}