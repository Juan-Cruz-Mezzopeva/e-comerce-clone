import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, name, image, regularPrice, discountPrice, discountPercentage } = product;
  
  return (
    <div className="flex flex-col w-full relative">
      <div className="relative overflow-hidden mb-3 cursor-pointer">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"
        />
        {discountPercentage && (
          <div className="absolute top-2 right-2 bg-black text-white py-1 px-2 text-xs font-medium">
            {discountPercentage}% OFF
          </div>
        )}
      </div>
      <Link 
        to={`/product/${id}`} 
        className="text-sm font-medium capitalize mb-1 hover:underline text-gray-800"
      >
        {name}
      </Link>
      <div className="flex gap-2 items-center">
        {discountPrice ? (
          <>
            <span className="text-sm font-medium">$ {discountPrice.toLocaleString()}</span>
            <span className="text-sm text-gray-400 line-through">$ {regularPrice.toLocaleString()}</span>
          </>
        ) : (
          <span className="text-sm">$ {regularPrice.toLocaleString()}</span>
        )}
      </div>
      <div className="text-xs text-gray-500 mt-1">Precio sin impuestos nacionales</div>
    </div>
  );
};

export default ProductCard;