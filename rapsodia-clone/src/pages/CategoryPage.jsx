// pages/CategoryPage.jsx
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import PromoBar from '../components/layout/PromoBar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductGrid from '../components/sections/ProductGrid';
import CategoryHeader from '../components/category/CategoryHeader';
import FilterSidebar from '../components/category/FilterSidebar';
import ProductSort from '../components/category/ProductSort';
import Pagination from '../components/category/Pagination';
import { useCategoryProducts } from '../hooks/useCategoryProducts';

const CategoryPage = () => {
  const { category } = useParams();
  
  // Filter state
  const [filters, setFilters] = useState({
    sizes: [],
    colors: [],
    priceMin: '',
    priceMax: '',
    onSale: false
  });
  
  // Sorting state
  const [sortOrder, setSortOrder] = useState('featured');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  
  // Get category info and products
  const { 
    categoryInfo, 
    filteredProducts, 
    sizeOptions, 
    colorOptions 
  } = useCategoryProducts(category, filters, sortOrder);
  
  // Handle pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <PromoBar />
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-5 py-10">
          {/* Breadcrumbs */}
          <div className="flex text-sm mb-5 text-gray-600">
            <Link to="/" className="hover:underline">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to={`/${category}`} className="hover:underline">{categoryInfo.title}</Link>
          </div>
          
          {/* Category Header */}
          <CategoryHeader 
            title={categoryInfo.title} 
            description={categoryInfo.description} 
          />
          
          {/* Filters and Products */}
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 mt-10">
            {/* Sidebar Filters */}
            <FilterSidebar 
              filters={filters}
              setFilters={setFilters}
              sizeOptions={sizeOptions}
              colorOptions={colorOptions}
            />
            
            {/* Products Area */}
            <div>
              {/* Sort Controls */}
              <ProductSort 
                totalProducts={filteredProducts.length} 
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
              />
              
              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProducts.map(product => (
                  <ProductGrid key={product.id} products={[product]} />
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handlePageChange={handlePageChange}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;