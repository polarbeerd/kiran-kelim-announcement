import React, { useState } from 'react';
import { CONTACT_DETAILS, CONTENT_DE, CONTENT_EN, HERO_IMAGE_URL } from './constants';
import { Language } from './types';
import LanguageSwitch from './components/LanguageSwitch';
import Header from './components/Header';
import ContactCard from './components/ContactCard';
import { AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('de');
  const content = lang === 'de' ? CONTENT_DE : CONTENT_EN;

  return (
    <div className="min-h-screen flex flex-col items-center bg-stone-50">
      
      {/* Brand Header */}
      <Header currentLang={lang} onToggle={setLang} />

      <main className="w-full max-w-3xl bg-[#fdfdfc] shadow-2xl md:rounded-b-lg overflow-hidden border-x border-b border-stone-100 relative">

        {/* Hero Image */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-stone-200">
           {/* 
              In a real deployment, ensure your image is optimized.
              The 'object-cover' class ensures it fills the area nicely.
              If the focus of the image is specific, you can adjust object-position (e.g. object-top).
           */}
          <img 
            src='/public/1.png' 
            alt="Orhan Kiranoglu in gallery" 
            className="w-full h-full object-cover object-center opacity-95 hover:opacity-100 transition-opacity duration-700"
          />
        </div>

        {/* Content Wrapper */}
        <div className="px-6 py-8 md:px-12 md:py-12">
          
          {/* Announcement Badge */}
          <div className="flex items-center justify-center gap-2 mb-8 text-amber-700/80 bg-amber-50 py-2 px-4 rounded-full mx-auto w-fit">
            <AlertCircle size={16} />
            <span className="text-xs font-bold tracking-wider uppercase">
              {content.title}
            </span>
          </div>

          {/* Body Text */}
          <div className="prose prose-stone max-w-none text-center">
            <p className="font-serif text-xl md:text-2xl text-stone-800 italic mb-8">
              {content.salutation}
            </p>
            
            <div className="space-y-6 text-stone-600 leading-relaxed font-sans text-base md:text-lg">
              <p>{content.p1}</p>
              
              <div className="bg-stone-50 border-l-4 border-stone-300 p-4 my-6 text-left md:text-center md:border-l-0 md:border-t-2 md:border-b-2 md:py-6">
                <p className="font-medium text-stone-800">
                  {content.p2}
                </p>
              </div>

              <p>{content.p3}</p>
            </div>

            {/* Signature */}
            <div className="mt-10 md:mt-12 mb-8">
              <p className="text-stone-500 text-sm mb-1">{content.signoff}</p>
              <p className="font-serif text-2xl text-stone-900">{CONTACT_DETAILS.name}</p>
              <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">{content.role}</p>
            </div>
          </div>

          {/* Contact Section */}
          <ContactCard details={CONTACT_DETAILS} label={content.contactLabel} />

          {/* Footer / Status */}
          <div className="mt-12 text-center border-t border-stone-100 pt-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-500 text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-stone-500"></span>
              </span>
              {content.newWebsiteLabel}
            </span>
            <p className="text-[10px] text-stone-300 mt-4 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Kiran Kelim Teppich & Kunst
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;