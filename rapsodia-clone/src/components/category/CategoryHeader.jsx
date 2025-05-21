// components/category/CategoryHeader.jsx
import React from 'react';

const CategoryHeader = ({ title, description }) => {
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl uppercase tracking-wider mb-4 font-light">
        {title}
      </h1>
      <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default CategoryHeader;