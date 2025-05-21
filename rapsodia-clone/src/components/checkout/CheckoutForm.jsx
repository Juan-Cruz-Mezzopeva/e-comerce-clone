// components/checkout/CheckoutForm.jsx
import React from 'react';
import ContactInfoSection from './ContactInfoSection';
import ShippingSection from './ShippingSection';
import PaymentSection from './PaymentSection';
import TermsSection from './TermsSection';

const CheckoutForm = ({ formData, formErrors, handleChange, subtotal, total }) => {
  return (
    <div>
      <ContactInfoSection 
        formData={formData} 
        formErrors={formErrors} 
        handleChange={handleChange} 
      />
      
      <ShippingSection 
        formData={formData} 
        formErrors={formErrors} 
        handleChange={handleChange} 
        subtotal={subtotal} 
      />
      
      <PaymentSection 
        formData={formData} 
        formErrors={formErrors} 
        handleChange={handleChange} 
        total={total} 
      />
      
      <TermsSection 
        formData={formData} 
        formErrors={formErrors} 
        handleChange={handleChange} 
      />
    </div>
  );
};

export default CheckoutForm;