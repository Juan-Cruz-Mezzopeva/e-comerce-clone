import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PromoBar from '../components/layout/PromoBar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductGrid from '../components/sections/ProductGrid';

const ProductPage = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  
  // Mock data para el producto (en una app real, esto vendría de una API)
  const product = {
    id: 1,
    name: "Jean tailor satin blue black",
    category: "Jeans",
    images: [
      "https://via.placeholder.com/600x900",
      "https://via.placeholder.com/600x900",
      "https://via.placeholder.com/600x900",
      "https://via.placeholder.com/600x900"
    ],
    regularPrice: 260000,
    discountPrice: 182000,
    discountPercentage: 30,
    colors: [
      { name: "Negro", code: "#000000" },
      { name: "Azul", code: "#0a2463" },
      { name: "Gris", code: "#7d8491" }
    ],
    sizes: [
      { size: "XS", available: true },
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: false },
      { size: "XL", available: true }
    ],
    description: "Jean de corte recto con lavado oscuro...",
    // Resto de información del producto
  };
  
  // Mock data para productos relacionados
  const relatedProducts = [
    // Lista de productos relacionados
  ];

  return (
    <div>
      <PromoBar />
      <Header />
      
      <main>
        <div className="flex text-sm px-5 py-4 text-gray-600">
          <Link to="/" className="hover:underline">Inicio</Link>
          <span className="mx-2">/</span>
          <Link to={`/${product.category.toLowerCase()}`} className="hover:underline">{product.category}</Link>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-5 py-10">
          {/* Galería de imágenes */}
          <div className="grid grid-cols-[80px_1fr] gap-4">
            <div className="flex flex-col gap-2">
              {product.images.map((img, index) => (
                <div 
                  key={index}
                  className={`w-20 h-20 cursor-pointer border-2 ${activeImage === index ? 'border-black' : 'border-transparent'}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} - vista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="w-full h-[600px]">
              <img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          {/* Información del producto */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl font-normal capitalize mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-1">
                {product.discountPrice ? (
                  <>
                    <span className="text-xl font-medium">$ {product.discountPrice.toLocaleString()}</span>
                    <span className="text-lg text-gray-400 line-through">$ {product.regularPrice.toLocaleString()}</span>
                    <span className="bg-black text-white text-sm px-2 py-1 ml-2">{product.discountPercentage}% OFF</span>
                  </>
                ) : (
                  <span className="text-lg">$ {product.regularPrice.toLocaleString()}</span>
                )}
              </div>
              <div className="text-sm text-gray-500">Precio sin impuestos nacionales</div>
            </div>
            
            <hr className="border-t border-gray-200" />
            
            {/* Selector de color */}
            <div>
              <h3 className="text-sm font-medium mb-3">Color: {product.colors[selectedColor].name}</h3>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <div 
                    key={index}
                    className={`w-7 h-7 rounded-full cursor-pointer border ${selectedColor === index ? 'border-2 border-black' : 'border border-gray-300'}`}
                    style={{ backgroundColor: color.code }}
                    onClick={() => setSelectedColor(index)}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Selector de talla */}
            <div>
              <h3 className="text-sm font-medium mb-3">Talle</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, index) => (
                  <div 
                    key={index}
                    className={`w-12 h-12 flex items-center justify-center cursor-pointer ${
                      !size.available 
                        ? 'text-gray-300 border border-gray-200 relative after:absolute after:w-full after:h-px after:bg-gray-300 after:rotate-45 after:top-1/2 cursor-not-allowed' 
                        : selectedSize === index
                          ? 'bg-black text-white border border-black' 
                          : 'border border-gray-300 hover:border-black'
                    }`}
                    onClick={() => size.available && setSelectedSize(index)}
                  >
                    {size.size}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Selector de cantidad */}
            <div>
              <h3 className="text-sm font-medium mb-3">Cantidad</h3>
              <div className="inline-flex border border-gray-300">
                <button 
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  -
                </button>
                <input 
                  type="number" 
                  min="1" 
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-14 h-10 text-center border-l border-r border-gray-300 focus:outline-none"
                />
                <button 
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Botón de compra */}
            <button 
              className="w-full bg-black text-white py-4 uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors mt-2"
              onClick={() => alert('Producto añadido al carrito')}
            >
              Agregar al carrito
            </button>
            
            {/* Tabs de información */}
            <div className="mt-6">
              <div className="flex border-b border-gray-200">
                <div 
                  className={`px-5 py-3 text-sm uppercase tracking-wider cursor-pointer ${activeTab === 0 ? 'border-b-2 border-black' : 'hover:border-b-2 hover:border-gray-400'}`}
                  onClick={() => setActiveTab(0)}
                >
                  Descripción
                </div>
                <div 
                  className={`px-5 py-3 text-sm uppercase tracking-wider cursor-pointer ${activeTab === 1 ? 'border-b-2 border-black' : 'hover:border-b-2 hover:border-gray-400'}`}
                  onClick={() => setActiveTab(1)}
                >
                  Detalles
                </div>
                <div 
                  className={`px-5 py-3 text-sm uppercase tracking-wider cursor-pointer ${activeTab === 2 ? 'border-b-2 border-black' : 'hover:border-b-2 hover:border-gray-400'}`}
                  onClick={() => setActiveTab(2)}
                >
                  Cuidados
                </div>
              </div>
              
              <div className="py-5 text-sm leading-relaxed">
                {activeTab === 0 && (
                  <p>{product.description}</p>
                )}
                {/* Aquí irían los contenidos de los demás tabs */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Productos relacionados */}
        <ProductGrid title="También te puede interesar" products={relatedProducts} />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;