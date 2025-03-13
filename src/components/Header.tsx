import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-diwali-gold/20 via-white to-diwali-gold/20 py-4 shadow-md">
      <div className="diwali-container flex items-center justify-between">
        <a
          href="https://www.definedgesecurities.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img 
            src="./assets/img/diwali-images/Definedge-Logo-03.png" 
            alt="Definedge Securities" 
            className="h-12" 
          />
        </a>
        
        <div className="hidden md:flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-diwali-gold animate-pulse"></div>
          <div className="w-4 h-4 rounded-full bg-diwali-orange animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-4 h-4 rounded-full bg-diwali-red animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          <div className="w-4 h-4 rounded-full bg-diwali-purple animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          <div className="w-4 h-4 rounded-full bg-diwali-maroon animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        </div>
      </div>
    </header>
  );
};

export default Header; 