// pages/CheckoutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PromoBar from '../components/layout/PromoBar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { CheckoutForm, OrderSummary } from '../components/checkout';
import { useCheckoutForm } from '../hooks/useCheckoutForm';

const CheckoutPage = () => {
  // Mock data for cart items
  const cartItems = [
    {
      id: 1,
      name: "Jean tailor satin blue black",
      image: "https://via.placeholder.com/70x70",
      color: "Negro",
      size: "M",
      price: 182000,
      quantity: 1
    },
    {
      id: 3,
      name: "Blusa estampada bohemia",
      image: "https://via.placeholder.com/70x70",
      color: "Multicolor",
      size: "S",
      price: 120000,
      quantity: 2
    }
  ];
  
  const {
    formData,
    formErrors,
    isSubmitting,
    subtotal,
    shipping,
    total,
    handleChange,
    handleSubmit
  } = useCheckoutForm(cartItems);
  
  return (
    <>
      <PromoBar />
      <Header />
      
      <main>
        <div className="max-w-6xl mx-auto px-5 py-10">
          <h1 className="text-2xl uppercase tracking-wider mb-10 text-center">Finalizar compra</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-2">
                <CheckoutForm 
                  formData={formData}
                  formErrors={formErrors}
                  handleChange={handleChange}
                  subtotal={subtotal}
                  total={total}
                />
              </div>
              
              <div>
                <OrderSummary 
                  cartItems={cartItems}
                  subtotal={subtotal}
                  shipping={shipping}
                  total={total}
                  isSubmitting={isSubmitting}
                />
              </div>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default CheckoutPage;