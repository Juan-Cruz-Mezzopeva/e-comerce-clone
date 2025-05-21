import React from 'react';

const HeroBanner = ({ image, title, subtitle, buttonText }) => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-white p-5 text-center">
        <h1 className="text-4xl md:text-5xl uppercase tracking-wider mb-5 font-light">
          {title}
        </h1>
        <h2 className="text-lg md:text-xl mb-8 font-normal max-w-xl">
          {subtitle}
        </h2>
        <button className="bg-white text-black border-none px-8 py-3 text-sm uppercase tracking-wider cursor-pointer transition-colors hover:bg-black hover:text-white">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;