// components/cart/EmptyCart.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="text-center py-16 px-5">
      <p className="text-lg mb-8">Tu carrito está vacío</p>
      <Link 
        to="/"
        className="inline-block bg-black text-white border-none px-8 py-4 text-sm uppercase tracking-wider transition-colors hover:bg-gray-800"
      >
        Seguir comprando
      </Link>
    </div>
  );
};

export default EmptyCart;