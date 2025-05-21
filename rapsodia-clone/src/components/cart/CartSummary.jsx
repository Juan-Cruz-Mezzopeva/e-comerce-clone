// components/cart/CartSummary.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PromoCodeInput from './PromoCodeInput';

const CartSummary = ({ 
  subtotal, 
  shipping, 
  discount, 
  discountAmount, 
  total, 
  promoCode, 
  onPromoCodeChange, 
  onApplyPromoCode 
}) => {
  return (
    <div className="bg-gray-50 p-8">
      <h2 className="text-lg font-medium mb-5">Resumen de compra</h2>
      
      <div className="flex justify-between mb-4 text-sm text-gray-600">
        <span>Subtotal</span>
        <span>$ {subtotal.toLocaleString()}</span>
      </div>
      
      <div className="flex justify-between mb-4 text-sm text-gray-600">
        <span>Envío</span>
        <span>{shipping === 0 ? 'Gratis' : `$ ${shipping.toLocaleString()}`}</span>
      </div>
      
      {discount > 0 && (
        <div className="flex justify-between mb-4 text-sm text-gray-600">
          <span>Descuento</span>
          <span>-$ {discountAmount.toLocaleString()}</span>
        </div>
      )}
      
      <div className="flex justify-between pt-4 mt-4 border-t border-gray-300 text-base font-medium">
        <span>Total</span>
        <span>$ {total.toLocaleString()}</span>
      </div>
      
      <PromoCodeInput 
        promoCode={promoCode}
        onPromoCodeChange={onPromoCodeChange}
        onApplyPromoCode={onApplyPromoCode}
      />
      
      <Link 
        to="/checkout"
        className="block w-full py-4 mt-6 bg-black text-white text-center text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
      >
        Finalizar compra
      </Link>
    </div>
  );
};

export default CartSummary;