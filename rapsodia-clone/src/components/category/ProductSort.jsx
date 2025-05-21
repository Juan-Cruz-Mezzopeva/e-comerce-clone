// components/category/ProductSort.jsx
import React from 'react';

const ProductSort = ({ totalProducts, sortOrder, setSortOrder }) => {
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  
  return (
    <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
      <div className="text-sm text-gray-600">
        {totalProducts} productos
      </div>
      
      <select 
        value={sortOrder} 
        onChange={handleSortChange}
        className="px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:border-black bg-white appearance-none bg-no-repeat bg-right-5 pr-8"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
          backgroundSize: '12px',
          backgroundPosition: 'right 10px center'
        }}
      >
        <option value="featured">Destacados</option>
        <option value="newest">Más recientes</option>
        <option value="price_asc">Precio: menor a mayor</option>
        <option value="price_desc">Precio: mayor a menor</option>
        <option value="discount">Mayor descuento</option>
      </select>
    </div>
  );
};

export default ProductSort;