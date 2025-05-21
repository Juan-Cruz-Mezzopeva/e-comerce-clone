import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ title, products }) => {
  return (
    <div className="px-5 py-10">
      {title && <h2 className="text-2xl uppercase tracking-wider mb-8 text-center">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;