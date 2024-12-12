import React from 'react';
import { Link } from 'react-router-dom';

import SendIcon from '../images/send.svg'
import MioraLogo from '../images/MioraLogo.png'
export default function Footer() {
    return (
        <footer className='bg-bgColor mt-auto py-10 text-white flex justify-between w-full'>
            <div className="container mx-auto py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col">
                        <div className="text-white">
                            <img src={MioraLogo} alt="logo" className='h-16' />
                        </div>
                        <p className="text-sm leading-none mt-4 text-white">Copyright © 2025</p>
                        <p className="text-sm leading-none mt-4 text-white">All rights reserved</p>
                        <div className="flex items-center gap-x-4 mt-12">
                            <img src="/path/to/instagram.png" alt="Instagram" className="w-8 h-8 opacity-50 cursor-pointer hover:bg-gray-700 rounded-full" />
                            <img src="/path/to/facebook.png" alt="Facebook" className="w-8 h-8 opacity-50 cursor-pointer hover:bg-gray-700 rounded-full" />
                            <img src="/path/to/twitter.png" alt="Twitter" className="w-8 h-8 opacity-50 cursor-pointer hover:bg-gray-700 rounded-full" />
                            <img src="/path/to/youtube.png" alt="YouTube" className="w-8 h-8 opacity-50 cursor-pointer hover:bg-gray-700 rounded-full" />
                        </div>
                    </div>
                    <div className="flex flex-col ml-8 sm:ml-0 gap-y-4">
                        <h2 className="text-base font-semibold text-white">Pages</h2>
                        <Link to="/" className="hover:text-gray">Home</Link>
                        <Link to="/shop" className="hover:text-gray">Shop</Link>
                        <Link to="/about-us" className="hover:text-gray">About</Link>
                        <Link to="/cart" className="hover:text-gray">Cart</Link>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h2 className="text-base font-semibold text-white">Support</h2>
                        <Link to="/find-a-shop" className="hover:text-gray">Find a Shop</Link>
                        <Link to="/payment-and-delivery" className="hover:text-gray">Payment and delivery</Link>
                        <Link to="/privacy" className="hover:text-gray">Privacy</Link>
                        <Link to="/terms-of-service" className="hover:text-gray">Terms of service</Link>
                    </div>
                    <div className="mt-10 lg:block hidden">
                        <label className="text-xl font-medium text-white">Get updates</label>
                        <div className="flex items-center justify-between border border-white mt-4 h-16">
                            <input type="email" className="text-base w-full text-white pl-4 bg-black placeholder-white focus:outline-none" placeholder="Enter your email" />
                            <button aria-label="send" className="w-16 h-full  text-gray bg-white">
                                <img src={SendIcon} alt="send" className='mx-auto' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
