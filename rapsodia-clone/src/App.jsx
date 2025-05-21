import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      {/* Otras rutas se irán añadiendo a medida que implementes más páginas */}
    </Routes>
  );
}

export default App;