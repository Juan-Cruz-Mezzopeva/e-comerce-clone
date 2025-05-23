import React, { useState } from 'react';

const PromoBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const promos = [
    "Hot Days | Hasta 40% off en seleccionados + 10% off extra",
    "Hasta 6 cuotas sin interés",
    "Envío gratis en compras superiores a $300.000",
    "Nueva colección primavera-verano"
  ];
  
  const duplicatedPromos = [...promos, ...promos];
  
  return (
    <div 
      className="w-full bg-gray-100 overflow-hidden py-2"
      role="region"
      aria-label="Avisos promocionales"
    >
      <div 
        className="flex whitespace-nowrap"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          animation: isHovered 
            ? 'none' 
            : 'scrollPromo 20s linear infinite',
          transform: isHovered ? 'translateX(0)' : undefined
        }}
      >
        {duplicatedPromos.map((promo, index) => (
          <div 
            key={index} 
            className="px-5 text-sm uppercase tracking-wider font-normal text-gray-700 flex-shrink-0"
          >
            {promo}
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes scrollPromo {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default PromoBar;