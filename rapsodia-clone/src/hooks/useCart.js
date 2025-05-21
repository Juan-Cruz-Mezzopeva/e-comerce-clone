// hooks/useCart.js
import { useState } from 'react';

export const useCart = (initialItems = []) => {
  const [cartItems, setCartItems] = useState(initialItems);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  
  // Handle quantity changes
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  // Handle item removal
  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  // Apply promo code
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'rapsodia10') {
      // 10% discount
      setDiscount(0.1);
      return true;
    } else {
      setDiscount(0);
      return false;
    }
  };
  
  // Calculate cart totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.price * item.quantity), 0
  );
  
  const shipping = subtotal >= 300000 ? 0 : 15000;
  const discountAmount = subtotal * discount;
  const total = subtotal + shipping - discountAmount;
  
  return {
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
    applyPromoCode,
  };
};