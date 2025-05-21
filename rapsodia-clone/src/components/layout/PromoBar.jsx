import React from 'react';

const PromoBar = () => {
  const promos = [
    "Hot Days | Hasta 40% off en seleccionados + 10% off extra",
    "Hasta 6 cuotas sin interés",
    "Envío gratis en compras superiores a $300.000",
    "Nueva colección primavera-verano"
  ];
  
  // Duplicamos los elementos para crear un efecto infinito de scroll
  const duplicatedPromos = [...promos, ...promos];
  
  return (
    <div className="w-full bg-gray-100 overflow-hidden py-2">
      <div className="flex animate-scroll whitespace-nowrap">
        {duplicatedPromos.map((promo, index) => (
          <div 
            key={index} 
            className="px-5 text-sm uppercase tracking-wider font-normal text-gray-700 flex-shrink-0"
          >
            {promo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoBar;