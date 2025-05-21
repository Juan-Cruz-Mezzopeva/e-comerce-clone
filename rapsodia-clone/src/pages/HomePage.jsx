import React from 'react';
import PromoBar from '../components/layout/PromoBar';
import Header from '../components/layout/Header';
import HeroBanner from '../components/sections/HeroBanner';
import ProductGrid from '../components/sections/ProductGrid';
import Footer from '../components/layout/Footer';

const HomePage = () => {
  // Mock data para hero banner
  const heroBanner = {
    image: "https://via.placeholder.com/1600x600",
    title: "Nueva Colección",
    subtitle: "Descubrí todas las novedades de la temporada con diseños únicos inspirados en viajes por el mundo.",
    buttonText: "Comprar ahora"
  };

  // Mock data para categorías
  const categories = [
    { id: 1, name: "Ropa", image: "https://via.placeholder.com/300x300" },
    { id: 2, name: "Accesorios", image: "https://via.placeholder.com/300x300" },
    { id: 3, name: "Calzado", image: "https://via.placeholder.com/300x300" },
    { id: 4, name: "Colecciones", image: "https://via.placeholder.com/300x300" }
  ];

  // Mock data para productos
  const featuredProducts = [
    {
      id: 1,
      name: "Jean tailor satin blue black",
      image: "https://via.placeholder.com/300x400",
      regularPrice: 260000,
      discountPrice: 182000,
      discountPercentage: 30
    },
    {
      id: 2,
      name: "Jean jimmy boxter",
      image: "https://via.placeholder.com/300x400",
      regularPrice: 260000,
      discountPrice: 182000,
      discountPercentage: 30
    },
    {
      id: 3,
      name: "Jean joe black studs",
      image: "https://via.placeholder.com/300x400",
      regularPrice: 280000,
      discountPrice: 196000,
      discountPercentage: 30
    },
    {
      id: 4,
      name: "Jean oxford blue",
      image: "https://via.placeholder.com/300x400",
      regularPrice: 240000,
      discountPrice: 168000,
      discountPercentage: 30
    }
  ];

  const newArrivals = [
    {
      id: 5,
      name: "Blusa estampada bohemia",
      image: "https://via.placeholder.com/300x400",
      regularPrice: 190000
    },
    {
      id: 6,
      name: "Vestido largo floral",
      image: "https://via.placeholder.com/300x400",
      regularPrice: 320000
    },
    {
      id: 7,
      name: "Pantalón palazzo",
      image: "https://via.placeholder.com/300x400",
      regularPrice: 220000
    },
    {
      id: 8,
      name: "Chaqueta bordada",
      image: "https://via.placeholder.com/300x400",
      regularPrice: 350000
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBar />
      <Header />
      
      <main className="flex-grow">
        <HeroBanner {...heroBanner} />
        
        {/* Categorías */}
        <section className="py-16 px-4 text-center">
          <h2 className="text-2xl uppercase tracking-wider mb-10">Explorá nuestras categorías</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map(category => (
              <div key={category.id} className="relative h-72 overflow-hidden cursor-pointer group">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-full bg-white bg-opacity-80 py-4 text-center uppercase tracking-wider">
                  {category.name}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <ProductGrid title="Ofertas destacadas" products={featuredProducts} />
        
        {/* Banner promocional */}
        <section className="py-20 px-4 bg-gray-100 text-center my-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl uppercase tracking-wider mb-4">Estilo que inspira</h2>
            <p className="mb-8 text-gray-600">
              Cada colección encuentra inspiración en diferentes culturas y décadas, 
              en el arte, en la música y viajes por el mundo, que marcan nuestra identidad 
              libre, aventurera y ultra femenina.
            </p>
            <button className="bg-black text-white px-8 py-3 uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">
              Descubrir más
            </button>
          </div>
        </section>
        
        <ProductGrid title="Recién llegados" products={newArrivals} />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;