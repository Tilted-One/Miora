import React, { createContext, useContext } from 'react';
import { useRecoilState } from 'recoil';
import languageState from '../state/languageState';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useRecoilState(languageState);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

const useLanguage = () => {
    return useContext(LanguageContext);
};

export { LanguageContext, LanguageProvider, useLanguage };