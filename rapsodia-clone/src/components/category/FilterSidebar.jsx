// components/category/FilterSidebar.jsx
import React from 'react';

const FilterSidebar = ({ filters, setFilters, sizeOptions, colorOptions }) => {
  // Handler functions
  const handleSizeFilter = (size) => {
    if (filters.sizes.includes(size)) {
      setFilters({
        ...filters,
        sizes: filters.sizes.filter(s => s !== size)
      });
    } else {
      setFilters({
        ...filters,
        sizes: [...filters.sizes, size]
      });
    }
  };
  
  const handleColorFilter = (color) => {
    if (filters.colors.includes(color)) {
      setFilters({
        ...filters,
        colors: filters.colors.filter(c => c !== color)
      });
    } else {
      setFilters({
        ...filters,
        colors: [...filters.colors, color]
      });
    }
  };
  
  const handlePriceInput = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };
  
  const handleOnSaleFilter = (e) => {
    setFilters({
      ...filters,
      onSale: e.target.checked
    });
  };
  
  return (
    <div className="sticky top-5 h-fit">
      {/* Size Filter */}
      <div className="mb-8">
        <h3 className="text-sm uppercase tracking-wider font-medium mb-4 pb-2 border-b border-gray-200">
          Talles
        </h3>
        <div className="flex flex-col gap-3">
          {sizeOptions.map(size => (
            <div key={size} className="flex items-center">
              <input 
                type="checkbox" 
                id={`size-${size}`} 
                checked={filters.sizes.includes(size)}
                onChange={() => handleSizeFilter(size)}
                className="mr-2"
              />
              <label htmlFor={`size-${size}`} className="text-sm cursor-pointer">
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Color Filter */}
      <div className="mb-8">
        <h3 className="text-sm uppercase tracking-wider font-medium mb-4 pb-2 border-b border-gray-200">
          Colores
        </h3>
        <div className="flex flex-col gap-3">
          {colorOptions.map(color => (
            <div 
              key={color.name} 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleColorFilter(color.name)}
            >
              <span 
                className="block w-5 h-5 rounded-full border border-gray-300" 
                style={{ backgroundColor: color.code }}
              />
              <span className="text-sm">{color.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="text-sm uppercase tracking-wider font-medium mb-4 pb-2 border-b border-gray-200">
          Precio
        </h3>
        <div className="mt-4">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <input 
              type="number" 
              name="priceMin" 
              placeholder="Mínimo" 
              value={filters.priceMin}
              onChange={handlePriceInput}
              className="w-full p-2 text-sm border border-gray-300 focus:outline-none focus:border-black"
            />
            <input 
              type="number" 
              name="priceMax" 
              placeholder="Máximo" 
              value={filters.priceMax}
              onChange={handlePriceInput}
              className="w-full p-2 text-sm border border-gray-300 focus:outline-none focus:border-black"
            />
          </div>
        </div>
      </div>
      
      {/* On Sale Filter */}
      <div className="mb-8">
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="onSale" 
            checked={filters.onSale}
            onChange={handleOnSaleFilter}
            className="mr-2"
          />
          <label htmlFor="onSale" className="text-sm cursor-pointer">
            Solo productos en oferta
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;