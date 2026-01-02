import React from 'react';
import { Language } from '../types';

interface LanguageSwitchProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ currentLang, onToggle }) => {
  return (
    <div className="flex items-center gap-3 text-sm tracking-widest font-sans">
      <button
        onClick={() => onToggle('de')}
        className={`transition-colors duration-300 ${
          currentLang === 'de' 
            ? 'text-stone-900 font-bold border-b border-stone-900' 
            : 'text-stone-400 hover:text-stone-600'
        }`}
      >
        DE
      </button>
      <span className="text-stone-300">|</span>
      <button
        onClick={() => onToggle('en')}
        className={`transition-colors duration-300 ${
          currentLang === 'en' 
            ? 'text-stone-900 font-bold border-b border-stone-900' 
            : 'text-stone-400 hover:text-stone-600'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;