// components/cart/PromoCodeInput.jsx
import React from 'react';

const PromoCodeInput = ({ promoCode, onPromoCodeChange, onApplyPromoCode }) => {
  return (
    <div className="my-5">
      <input 
        type="text" 
        placeholder="Código promocional"
        value={promoCode}
        onChange={(e) => onPromoCodeChange(e.target.value)}
        className="w-full p-3 border border-gray-300 mb-2 text-sm focus:outline-none focus:border-black"
      />
      <button 
        onClick={onApplyPromoCode}
        className="w-full p-3 bg-black text-white border-none text-sm uppercase tracking-wider cursor-pointer hover:bg-gray-800"
      >
        Aplicar
      </button>
    </div>
  );
};

export default PromoCodeInput;