import React from "react";
import { Link } from 'react-router-dom';
import { useLanguage } from '../translate/LanguageContext';
import LanguageSwitcher from "../translate/LanguageSwitcher";
import BurgerMenuIcon from '../ui/BurgerMenuIcon';
import { useRecoilState } from "recoil";
import cardState from "../state/cardState";

export default function Header(props) {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [card, setCard] = useRecoilState(cardState)

    React.useEffect(() => {
        if (!props.isMobile) {
            setMenuOpen(false);
        }
    }, [props.isMobile]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const cartAmount = card.length;

    return (
        <header className='fixed top-0 left-0 w-screen shadow-md z-20 text-white bg-bgColor'>
            {props.isMobile ? (
                <div className="w-auto px-4">
                    <div className="flex justify-between items-center h-16 px-4 z-50">
                        <button className="text-2xl focus:outline-none fill-white" onClick={toggleMenu}>
                            <BurgerMenuIcon isOpen={menuOpen}/>
                        </button>
                        <Link to='/cart' className='hover:text-gray text-xl'>
                            {props.translations.header.cart} {props.cartAmount > 0 && `(${props.cartAmount})`}
                        </Link>
                    </div>
                    <div className={`absolute top-16 left-0 w-full gap-y-4 pb-10 bg-bgColor ${menuOpen ? 'block' : 'hidden'}`}>
                        <nav className="flex flex-col gap-y-10 py-4 text-xl w-full items-center">
                            <Link to="/" className="hover:text-gray w-full text-center" onClick={() => setMenuOpen(false)}>{props.translations.home}</Link>
                            <Link to="/shop" className="hover:text-gray w-full text-center" onClick={() => setMenuOpen(false)}>{props.translations.shop}</Link>
                            <Link to="/about-us" className="hover:text-gray w-full text-center" onClick={() => setMenuOpen(false)}>{props.translations.about}</Link>
                        </nav>
                        <div className="flex  justify-center gap-x-6 p-4">
                            <LanguageSwitcher textSize="text-xl" />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-between h-16 items-center px-10">
                    <nav className="flex gap-x-8">
                        <Link to="/" className="hover:text-gray">{props.translations.home}</Link>
                        <Link to="/shop" className="hover:text-gray">{props.translations.shop}</Link>
                        <Link to="/about-us" className="hover:text-gray">{props.translations.about}</Link>
                    </nav>
                    <div className="flex gap-x-6">
                        <Link to='/cart' className='hover:text-gray'>
                            {props.translations.cart} {cartAmount > 0 && `(${cartAmount})`}
                        </Link>
                        <LanguageSwitcher />
                    </div>
                </div>
            )}
        </header>
    );
}
