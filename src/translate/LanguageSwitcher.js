import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import languageState from '../state/languageState';
import { useRecoilValue } from 'recoil';

const LanguageSwitcher = (props) => {
    const { setLanguage } = useContext(LanguageContext);
    const currentLanguage = useRecoilValue(languageState);

    const switchLanguage = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <select value={currentLanguage} onChange={switchLanguage} className={`bg-black px-4 border-none outline-none flex justify-between ${props.textSize}`}>
            <option value="En">Eng</option>
            <option value="Ka">Geo</option>
            <option value="Ru">Ru</option>
        </select>
    );
};

export default LanguageSwitcher;
