// components/checkout/OrderSummary.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = ({ cartItems, subtotal, shipping, total, isSubmitting }) => {
  return (
    <div className="bg-gray-50 p-8">
      <h2 className="text-lg font-medium mb-5">Resumen de compra</h2>
      
      <div className="mb-5">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 mb-4">
            <div className="w-16 h-16 flex-shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1">
              <div className="text-sm font-medium mb-1">{item.name}</div>
              <div className="text-xs text-gray-600">
                Color: {item.color} | Talle: {item.size}
              </div>
              <div className="text-xs text-gray-600">Cantidad: {item.quantity}</div>
            </div>
            
            <div className="text-sm font-medium text-right">
              $ {(item.price * item.quantity).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
      
      <hr className="border-t border-gray-300 my-5" />
      
      <div className="flex justify-between mb-2 text-sm text-gray-600">
        <span>Subtotal</span>
        <span>$ {subtotal.toLocaleString()}</span>
      </div>
      
      <div className="flex justify-between mb-2 text-sm text-gray-600">
        <span>Envío</span>
        <span>{shipping === 0 ? 'Gratis' : `$ ${shipping.toLocaleString()}`}</span>
      </div>
      
      <div className="flex justify-between mt-4 text-base font-medium">
        <span>Total</span>
        <span>$ {total.toLocaleString()}</span>
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-black text-white py-4 uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors mt-8 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Procesando...' : 'Realizar pago'}
      </button>
      
      <Link to="/cart" className="block text-center mt-5 text-sm text-gray-600 underline hover:text-black">
        Volver al carrito
      </Link>
    </div>
  );
};

export default OrderSummary;