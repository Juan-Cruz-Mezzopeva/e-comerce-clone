// pages/CartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PromoBar from '../components/layout/PromoBar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import EmptyCart from '../components/cart/EmptyCart';
import { useCart } from '../hooks/useCart';

const CartPage = () => {
  // Sample cart data - in a real app, this would come from context/API
  const initialCartItems = [
    {
      id: 1,
      name: "Jean tailor satin blue black",
      image: "https://via.placeholder.com/100x100",
      color: "Negro",
      size: "M",
      price: 182000,
      quantity: 1
    },
    {
      id: 3,
      name: "Blusa estampada bohemia",
      image: "https://via.placeholder.com/100x100",
      color: "Multicolor",
      size: "S",
      price: 120000,
      quantity: 2
    }
  ];
  
  const {
    cartItems,
    promoCode,
    discount,
    subtotal,
    shipping,
    discountAmount,
    total,
    setPromoCode,
    handleQuantityChange,
    handleRemoveItem,
    applyPromoCode
  } = useCart(initialCartItems);
  
  const handleApplyPromoCode = () => {
    const success = applyPromoCode();
    if (success) {
      alert('¡Código promocional aplicado! 10% de descuento.');
    } else {
      alert('Código promocional no válido.');
    }
  };
  
  return (
    <>
      <PromoBar />
      <Header />
      
      <main>
        <div className="max-w-6xl mx-auto px-5 py-10">
          <h1 className="text-2xl uppercase tracking-wider mb-10 text-center">Mi carrito</h1>
          
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-10">
              <div className="w-full">
                {cartItems.map(item => (
                  <CartItem 
                    key={item.id} 
                    item={item} 
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemoveItem}
                  />
                ))}
                
                <Link 
                  to="/"
                  className="block text-center mt-10 text-sm text-gray-600 underline hover:text-black"
                >
                  Continuar comprando
                </Link>
              </div>
              
              <CartSummary 
                subtotal={subtotal}
                shipping={shipping}
                discount={discount}
                discountAmount={discountAmount}
                total={total}
                promoCode={promoCode}
                onPromoCodeChange={setPromoCode}
                onApplyPromoCode={handleApplyPromoCode}
              />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default CartPage;