import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useLanguage } from './translate/LanguageContext';
import LanguageSwitcher from './translate/LanguageSwitcher';
import { LanguageContext } from './translate/LanguageContext';
import en from './translate/En.json';
import ge from './translate/Ka.json';
import ru from './translate/Ru.json';

import Home from './pages/Home';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';

import Confirmation from './components/Confirmation';
import Header from './components/Header';
import ScrollToTop from './components/ScroleToTop';
import Footer from './components/Footer';
import { getProducts } from './api';
import Loader from './ui/Loader';
import productsState from './state/productsState';
import { useRecoilState } from 'recoil';



function App() {

  const [data, setData] = useRecoilState(productsState)

  React.useEffect(() => {
    (async () => {
      // const newData = await getProducts()
      // setData(newData)
    })()
  }, [])

  const [cartItems, setCartItems] = React.useState(() => {
    const savedItems = sessionStorage.getItem('cartItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  React.useEffect(() => {
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const [cartAmount, setCartAmount] = React.useState(cartItems.length);


  const addToCart = (wineInfo) => {
    setCartItems((prevItems) => {
      if (!Array.isArray(prevItems)) {
        prevItems = [];
      }
      const updatedItems = [...prevItems, wineInfo];
      setCartAmount(updatedItems.length);
      return updatedItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(item => item.id !== id);
      setCartAmount(updatedItems.length);
      return updatedItems;
    });
  };

  const [showMineContent, setShowMineContent] = React.useState(sessionStorage.getItem("isMajor") !== "true")

  React.useEffect(() => {
    if(!showMineContent){
      sessionStorage.setItem("isMajor", "true");
    }
  }, [showMineContent])

  const { language } = React.useContext(LanguageContext);
  const translations = language === 'en' ? en : language === 'ka' ? ge : ru;

  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (data === undefined) {
    return (
      <Loader />
    )
  }
  return (
    <div className='flex flex-col h-screen w-full'>
      {showMineContent ?
        <Confirmation

          showMineContent={showMineContent} setShowMineContent={setShowMineContent}
          translations={translations}
        />
        :
        <Router>
          <Header
            cartAmount={cartAmount} setCartAmount={setCartAmount}
            translations={translations}
            isMobile={isMobile} setIsMobile={setIsMobile} />
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={
              <Home
                translations={translations}
                isMobile={isMobile} setIsMobile={setIsMobile}
              />} />
            <Route path="/shop" element={
              <Shop
                cartItems={cartItems} setCartItems={setCartItems}
                translations={translations} language={language}
                addToCart={addToCart}
                isMobile={isMobile}
              />} />
            <Route path="/about-us" element={
              <AboutUs
                translations={translations}
              />} />
            <Route path="/cart" element={
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                translations={translations}
                isMobile={isMobile}
              />} />
            <Route path="/product_page" element={
              <ProductPage
                cartItems={cartItems} setCartItems={setCartItems}
                addToCart={addToCart}
                translations={translations}
                isMobile={isMobile}
              />} />
          </Routes>
          <Footer />
        </Router>
      }
    </div>
  )
}
export default App;