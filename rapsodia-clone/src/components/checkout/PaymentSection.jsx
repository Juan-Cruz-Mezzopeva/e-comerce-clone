// components/checkout/PaymentSection.jsx
import React from 'react';
import { FormGroup, FormRow, Label, Input, Select, RadioOption } from '../ui/FormElements';
import ErrorMessage from '../ui/ErrorMessage';

const PaymentSection = ({ formData, formErrors, handleChange, total }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-5">
        <div className="flex items-center justify-center w-6 h-6 bg-black text-white rounded-full text-sm mr-2.5">3</div>
        <h2 className="text-lg font-medium">Método de pago</h2>
      </div>
      
      <div className="mb-5">
        <RadioOption 
          selected={formData.paymentMethod === 'credit_card'}
          onClick={() => {
            const e = {
              target: {
                name: 'paymentMethod',
                value: 'credit_card'
              }
            };
            handleChange(e);
          }}
        >
          <input 
            type="radio" 
            id="payment_credit" 
            name="paymentMethod" 
            value="credit_card"
            checked={formData.paymentMethod === 'credit_card'}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="payment_credit" className="flex justify-between w-full cursor-pointer">
            <span>Tarjeta de crédito</span>
          </label>
        </RadioOption>
        
        <div className="flex gap-3 mt-4 mb-4 ml-7">
          <img src="https://via.placeholder.com/40x25?text=VISA" alt="Visa" className="h-6 w-10 object-contain" />
          <img src="https://via.placeholder.com/40x25?text=MASTER" alt="Mastercard" className="h-6 w-10 object-contain" />
          <img src="https://via.placeholder.com/40x25?text=AMEX" alt="American Express" className="h-6 w-10 object-contain" />
        </div>
        
        <RadioOption 
          selected={formData.paymentMethod === 'transfer'}
          onClick={() => {
            const e = {
              target: {
                name: 'paymentMethod',
                value: 'transfer'
              }
            };
            handleChange(e);
          }}
        >
          <input 
            type="radio" 
            id="payment_transfer" 
            name="paymentMethod" 
            value="transfer"
            checked={formData.paymentMethod === 'transfer'}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="payment_transfer" className="flex justify-between w-full cursor-pointer">
            <span>Transferencia bancaria</span>
          </label>
        </RadioOption>
      </div>
      
      {formData.paymentMethod === 'credit_card' && (
        <>
          <FormGroup error={formErrors.cardNumber}>
            <Label htmlFor="cardNumber">Número de tarjeta *</Label>
            <Input 
              type="text" 
              id="cardNumber" 
              name="cardNumber" 
              placeholder="XXXX XXXX XXXX XXXX"
              value={formData.cardNumber}
              onChange={handleChange}
            />
            {formErrors.cardNumber && <ErrorMessage>{formErrors.cardNumber}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup error={formErrors.cardName}>
            <Label htmlFor="cardName">Nombre en la tarjeta *</Label>
            <Input 
              type="text" 
              id="cardName" 
              name="cardName" 
              value={formData.cardName}
              onChange={handleChange}
            />
            {formErrors.cardName && <ErrorMessage>{formErrors.cardName}</ErrorMessage>}
          </FormGroup>
          
          <FormRow cols="grid-cols-1 md:grid-cols-2">
            <FormGroup error={formErrors.cardExpiry}>
              <Label htmlFor="cardExpiry">Fecha de vencimiento *</Label>
              <Input 
                type="text" 
                id="cardExpiry" 
                name="cardExpiry" 
                placeholder="MM/AA"
                value={formData.cardExpiry}
                onChange={handleChange}
              />
              {formErrors.cardExpiry && <ErrorMessage>{formErrors.cardExpiry}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup error={formErrors.cardCvv}>
              <Label htmlFor="cardCvv">Código de seguridad *</Label>
              <Input 
                type="text" 
                id="cardCvv" 
                name="cardCvv" 
                placeholder="CVC"
                value={formData.cardCvv}
                onChange={handleChange}
              />
              {formErrors.cardCvv && <ErrorMessage>{formErrors.cardCvv}</ErrorMessage>}
            </FormGroup>
          </FormRow>
          
          <FormGroup>
            <Label htmlFor="installments">Cuotas</Label>
            <Select 
              id="installments" 
              name="installments" 
              value={formData.installments}
              onChange={handleChange}
            >
              <option value="1">1 cuota de $ {total.toLocaleString()}</option>
              <option value="3">3 cuotas sin interés de $ {Math.round(total / 3).toLocaleString()}</option>
              <option value="6">6 cuotas sin interés de $ {Math.round(total / 6).toLocaleString()}</option>
            </Select>
          </FormGroup>
        </>
      )}
      
      {formData.paymentMethod === 'transfer' && (
        <div className="mt-5 text-sm leading-relaxed">
          <p>Una vez finalizada la compra, recibirás un email con los datos bancarios para realizar la transferencia.</p>
          <p>Tu pedido será procesado una vez que confirmemos la recepción de tu pago.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentSection;