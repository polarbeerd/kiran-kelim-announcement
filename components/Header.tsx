import React from 'react';
import { Language } from '../types';
import LanguageSwitch from './LanguageSwitch';

interface HeaderProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onToggle }) => {
  return (
    <header className="sticky top-0 z-50 w-full max-w-3xl bg-[#fdfdfc]/80 backdrop-blur-md border-b border-stone-100 flex items-center justify-between px-6 py-4 md:px-12 mx-auto">
      <div className="flex flex-col">
        <h1 className="font-serif text-xl md:text-2xl text-stone-800 tracking-wide leading-none">
          Kiran Kelim
        </h1>
        <p className="font-sans text-[8px] md:text-[10px] tracking-[0.3em] text-stone-400 uppercase mt-1">
          Teppich & Kunst
        </p>
      </div>
      
      <LanguageSwitch currentLang={currentLang} onToggle={onToggle} />
    </header>
  );
};

export default Header;