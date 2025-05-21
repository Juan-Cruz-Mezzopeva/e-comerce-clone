// components/cart/CartItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="grid grid-cols-[100px_1fr_auto] gap-5 py-5 border-b border-gray-200 last:border-b-0">
      <div className="w-[100px] h-[100px]">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex flex-col justify-between">
        <div>
          <Link 
            to={`/product/${item.id}`}
            className="text-base font-medium text-gray-800 mb-1 hover:underline"
          >
            {item.name}
          </Link>
          <p className="text-sm text-gray-600 mb-1">Color: {item.color}</p>
          <p className="text-sm text-gray-600">Talle: {item.size}</p>
        </div>
        <div className="text-sm font-medium">$ {item.price.toLocaleString()}</div>
      </div>
      
      <div className="flex flex-col items-end justify-between">
        <div className="flex border border-gray-300">
          <button 
            className="w-[30px] h-[30px] flex items-center justify-center hover:bg-gray-100"
            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
          >
            -
          </button>
          <input 
            type="number" 
            min="1" 
            value={item.quantity}
            onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value) || 1)}
            className="w-[40px] h-[30px] border-l border-r border-gray-300 text-center text-sm focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <button 
            className="w-[30px] h-[30px] flex items-center justify-center hover:bg-gray-100"
            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        
        <button 
          className="bg-transparent border-none text-gray-500 text-sm cursor-pointer text-right hover:text-gray-800 hover:underline"
          onClick={() => onRemove(item.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;