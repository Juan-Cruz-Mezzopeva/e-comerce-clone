// hooks/useCheckoutForm.js
import { useState } from 'react';

export const useCheckoutForm = (cartItems) => {
  // Initial form state
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    addressNumber: '',
    apartment: '',
    postalCode: '',
    city: '',
    province: '',
    deliveryType: 'home',
    storeLocation: '',
    paymentMethod: 'credit_card',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    installments: '1',
    termsAccepted: false,
    newsLetter: false
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.price * item.quantity), 0
  );
  
  // Calculate shipping cost
  const getShippingCost = () => {
    if (subtotal >= 300000) return 0;
    return formData.deliveryType === 'home' ? 15000 : 0;
  };
  
  const shipping = getShippingCost();
  
  // Calculate total
  const total = subtotal + shipping;
  
  // Form change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error if field has been modified
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.email) errors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email inválido';
    
    if (!formData.firstName) errors.firstName = 'El nombre es requerido';
    if (!formData.lastName) errors.lastName = 'El apellido es requerido';
    if (!formData.phone) errors.phone = 'El teléfono es requerido';
    
    if (formData.deliveryType === 'home') {
      if (!formData.address) errors.address = 'La dirección es requerida';
      if (!formData.addressNumber) errors.addressNumber = 'El número es requerido';
      if (!formData.postalCode) errors.postalCode = 'El código postal es requerido';
      if (!formData.city) errors.city = 'La ciudad es requerida';
      if (!formData.province) errors.province = 'La provincia es requerida';
    } else if (formData.deliveryType === 'store' && !formData.storeLocation) {
      errors.storeLocation = 'Selecciona una tienda';
    }
    
    if (formData.paymentMethod === 'credit_card') {
      if (!formData.cardNumber) errors.cardNumber = 'El número de tarjeta es requerido';
      if (!formData.cardName) errors.cardName = 'El nombre en la tarjeta es requerido';
      if (!formData.cardExpiry) errors.cardExpiry = 'La fecha de vencimiento es requerida';
      if (!formData.cardCvv) errors.cardCvv = 'El código de seguridad es requerido';
    }
    
    if (!formData.termsAccepted) {
      errors.termsAccepted = 'Debes aceptar los términos y condiciones';
    }
    
    return errors;
  };
  
  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Formulario enviado:', formData);
        alert('¡Compra realizada con éxito! Redirigiendo...');
        // Redirect would go here
        setIsSubmitting(false);
      }, 2000);
    } else {
      // Scroll to first error
      const firstErrorField = document.querySelector('[data-error="true"]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };
  
  return {
    formData,
    formErrors,
    isSubmitting,
    subtotal,
    shipping,
    total,
    handleChange,
    handleSubmit
  };
};