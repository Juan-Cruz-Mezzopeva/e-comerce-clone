// hooks/useCategoryProducts.js
import { useMemo } from 'react';

export const useCategoryProducts = (category, filters, sortOrder) => {
  // Mock data for category info
  const categoryInfo = useMemo(() => {
    const categories = {
      ropa: {
        title: 'Ropa',
        description: 'Descubrí nuestra colección de prendas con estampados únicos, tejidos naturales y detalles artesanales inspirados en viajes por el mundo.'
      },
      accesorios: {
        title: 'Accesorios',
        description: 'Complementá tu look con nuestros accesorios con detalles únicos y estampados exclusivos que le darán un toque distintivo a tu estilo.'
      },
      calzado: {
        title: 'Calzado',
        description: 'Encontrá el calzado perfecto para completar tus looks, con diseños cómodos y estilosos para todas las ocasiones.'
      },
      sale: {
        title: 'Sale',
        description: 'Las mejores ofertas en ropa, calzado y accesorios de temporadas pasadas con descuentos imperdibles.'
      }
    };
    
    return categories[category] || {
      title: category.charAt(0).toUpperCase() + category.slice(1),
      description: 'Explorá nuestra colección.'
    };
  }, [category]);
  
  // Mock data for products
  const products = useMemo(() => {
    return [
      // Productos para "ropa"
      {
        id: 1,
        name: "Jean tailor satin blue black",
        image: "https://via.placeholder.com/300x400",
        regularPrice: 260000,
        discountPrice: 182000,
        discountPercentage: 30,
        category: "ropa",
      },
      {
        id: 2,
        name: "Blusa bohemia",
        image: "https://via.placeholder.com/300x400",
        regularPrice: 190000,
        category: "ropa",
      },
      // ... rest of the products
      // You would include all the products from the original file here
    ];
  }, []);
  
  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Filter by category
      if (category !== 'sale' && product.category !== category) return false;
      
      // If sale category, show only discounted products
      if (category === 'sale' && !product.discountPrice) return false;
      
      // Apply price filters
      if (filters.priceMin && product.regularPrice < parseInt(filters.priceMin)) return false;
      if (filters.priceMax && product.regularPrice > parseInt(filters.priceMax)) return false;
      
      // On sale filter
      if (filters.onSale && !product.discountPrice) return false;
      
      return true;
    });
    
    // Sort products
    filtered.sort((a, b) => {
      switch (sortOrder) {
        case 'price_asc':
          return (a.discountPrice || a.regularPrice) - (b.discountPrice || b.regularPrice);
        case 'price_desc':
          return (b.discountPrice || b.regularPrice) - (a.discountPrice || a.regularPrice);
        case 'newest':
          return b.id - a.id;
        case 'discount':
          if (a.discountPrice && !b.discountPrice) return -1;
          if (!a.discountPrice && b.discountPrice) return 1;
          return (b.discountPercentage || 0) - (a.discountPercentage || 0);
        default:
          return 0;
      }
    });
    
    return filtered;
  }, [category, products, filters, sortOrder]);
  
  // Mock data for filter options
  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL'];
  
  const colorOptions = [
    { name: 'Negro', code: '#000000' },
    { name: 'Blanco', code: '#FFFFFF' },
    { name: 'Azul', code: '#0a2463' },
    { name: 'Rojo', code: '#d7263d' },
    { name: 'Verde', code: '#2e933c' },
    { name: 'Amarillo', code: '#f6d55c' },
    { name: 'Rosa', code: '#ed217c' },
    { name: 'Gris', code: '#7d8491' }
  ];
  
  return {
    categoryInfo,
    filteredProducts,
    sizeOptions,
    colorOptions
  };
};  