// components/category/Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const renderPageNumbers = () => {
    const pages = [];
    
    // Add "Previous" button
    pages.push(
      <button 
        key="prev" 
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className={`w-10 h-10 flex items-center justify-center border ${
          currentPage === 1 
            ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
            : 'border-gray-300 hover:border-black'
        }`}
      >
        &lt;
      </button>
    );
    
    // Add page number buttons
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button 
          key={i} 
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 flex items-center justify-center border ${
            currentPage === i 
              ? 'bg-black text-white border-black' 
              : 'border-gray-300 hover:border-black'
          }`}
        >
          {i}
        </button>
      );
    }
    
    // Add "Next" button
    pages.push(
      <button 
        key="next" 
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className={`w-10 h-10 flex items-center justify-center border ${
          currentPage === totalPages 
            ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
            : 'border-gray-300 hover:border-black'
        }`}
      >
        &gt;
      </button>
    );
    
    return pages;
  };
  
  return (
    <div className="flex justify-center mt-12 gap-1">
      {renderPageNumbers()}
    </div>
  );
};

export default Pagination;