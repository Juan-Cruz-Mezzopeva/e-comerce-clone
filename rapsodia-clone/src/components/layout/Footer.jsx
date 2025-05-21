import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-6 px-4 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto mb-10">
        <div>
          <h3 className="text-sm uppercase tracking-wider font-semibold mb-5">Ayuda</h3>
          <ul className="space-y-3">
            <li><Link to="/como-comprar" className="text-gray-600 hover:text-black">Como comprar</Link></li>
            <li><Link to="/preguntas-frecuentes" className="text-gray-600 hover:text-black">Preguntas frecuentes</Link></li>
            <li><Link to="/cambios-devoluciones" className="text-gray-600 hover:text-black">Cambios y devoluciones</Link></li>
            <li><Link to="/medios-pago" className="text-gray-600 hover:text-black">Medios de pago</Link></li>
            <li><Link to="/envios" className="text-gray-600 hover:text-black">Envíos</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm uppercase tracking-wider font-semibold mb-5">Información</h3>
          <ul className="space-y-3">
            <li><Link to="/sobre-nosotros" className="text-gray-600 hover:text-black">Sobre nosotros</Link></li>
            <li><Link to="/locales" className="text-gray-600 hover:text-black">Nuestras tiendas</Link></li>
            <li><Link to="/trabaja-con-nosotros" className="text-gray-600 hover:text-black">Trabaja con nosotros</Link></li>
            <li><Link to="/terminos-condiciones" className="text-gray-600 hover:text-black">Términos y condiciones</Link></li>
            <li><Link to="/privacidad" className="text-gray-600 hover:text-black">Política de privacidad</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm uppercase tracking-wider font-semibold mb-5">Contacto</h3>
          <ul className="space-y-3">
            <li><a href="mailto:contacto@rapsodia.com.ar" className="text-gray-600 hover:text-black">contacto@rapsodia.com.ar</a></li>
            <li><a href="tel:+541127842326" className="text-gray-600 hover:text-black">+54 11 2784 2326</a></li>
            <li><Link to="/contacto" className="text-gray-600 hover:text-black">Formulario de contacto</Link></li>
          </ul>
          
          <h3 className="text-sm uppercase tracking-wider font-semibold mb-3 mt-8">Seguinos</h3>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm uppercase tracking-wider font-semibold mb-5">Newsletter</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Suscribite para recibir novedades y promociones exclusivas.
          </p>
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="px-3 py-2 border border-gray-300 focus:outline-none focus:border-black"
            />
            <button 
              type="button" 
              className="bg-black text-white py-2 uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors"
            >
              Suscribirse
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Rapsodia. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;