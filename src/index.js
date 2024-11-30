import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import InitializePage from './pages/InitializePage';
import { LanguageProvider } from './translate/LanguageContext';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot >
    <LanguageProvider>
      <InitializePage />
    </LanguageProvider>
  </RecoilRoot>
);
