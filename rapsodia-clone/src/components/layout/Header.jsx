import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="flex justify-between items-center px-5 md:px-10 py-5 border-b border-gray-200 sticky top-0 bg-white z-50">
      <Link to="/" className="text-2xl font-semibold uppercase tracking-wider">
        Rapsodia
      </Link>
      
      <nav className="hidden md:flex gap-8 items-center">
        <Link to="/ropa" className="text-sm uppercase tracking-wider font-medium text-gray-700 hover:text-black relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-px hover:after:bg-black hover:after:bottom-[-3px] hover:after:left-0">
          Ropa
        </Link>
        <Link to="/accesorios" className="text-sm uppercase tracking-wider font-medium text-gray-700 hover:text-black relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-px hover:after:bg-black hover:after:bottom-[-3px] hover:after:left-0">
          Accesorios
        </Link>
        <Link to="/calzado" className="text-sm uppercase tracking-wider font-medium text-gray-700 hover:text-black relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-px hover:after:bg-black hover:after:bottom-[-3px] hover:after:left-0">
          Calzado
        </Link>
        <Link to="/sale" className="text-sm uppercase tracking-wider font-medium text-gray-700 hover:text-black relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-px hover:after:bg-black hover:after:bottom-[-3px] hover:after:left-0">
          Sale
        </Link>
      </nav>
      
      <div className="flex items-center gap-5">
        <button className="p-1">
          <i className="fas fa-search text-lg"></i>
        </button>
        <button className="p-1">
          <i className="fas fa-user text-lg"></i>
        </button>
        <button className="p-1 relative">
          <i className="fas fa-shopping-cart text-lg"></i>
          <span className="absolute -top-2 -right-2 bg-black text-white w-5 h-5 flex items-center justify-center text-xs rounded-full">
            2
          </span>
        </button>
        <button 
          className="md:hidden p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-5 md:hidden">
          <div className="flex justify-end">
            <button 
              className="p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <nav className="flex flex-col gap-4 mt-8">
            <Link to="/ropa" className="text-xl py-2 border-b border-gray-100">
              Ropa
            </Link>
            <Link to="/accesorios" className="text-xl py-2 border-b border-gray-100">
              Accesorios
            </Link>
            <Link to="/calzado" className="text-xl py-2 border-b border-gray-100">
              Calzado
            </Link>
            <Link to="/sale" className="text-xl py-2 border-b border-gray-100">
              Sale
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;