import React from 'react';
import { Language } from '../types';

interface LanguageSwitchProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ currentLang, onToggle }) => {
  return (
    <div className="flex items-center p-1 bg-stone-100/50 rounded-full border border-stone-200/50 backdrop-blur-sm self-center">
      <button
        onClick={() => onToggle('de')}
        className={`px-3 py-1 text-[10px] tracking-[0.2em] font-bold rounded-full transition-all duration-300 ${
          currentLang === 'de' 
            ? 'bg-stone-900 text-white shadow-sm' 
            : 'text-stone-400 hover:text-stone-600'
        }`}
      >
        DE
      </button>
      <button
        onClick={() => onToggle('en')}
        className={`px-3 py-1 text-[10px] tracking-[0.2em] font-bold rounded-full transition-all duration-300 ${
          currentLang === 'en' 
            ? 'bg-stone-900 text-white shadow-sm' 
            : 'text-stone-400 hover:text-stone-600'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;