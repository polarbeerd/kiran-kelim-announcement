import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="text-center mb-8 md:mb-12 pt-8">
      <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-800 tracking-wide mb-2">
        Kiran Kelim
      </h1>
      <p className="font-sans text-xs md:text-sm tracking-[0.2em] text-stone-500 uppercase">
        Teppich & Kunst
      </p>
    </div>
  );
};

export default Header;