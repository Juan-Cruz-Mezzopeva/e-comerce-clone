// components/checkout/ContactInfoSection.jsx
import React from 'react';
import { FormGroup, FormRow, Label, Input } from '../ui/FormElements';
import ErrorMessage from '../ui/ErrorMessage';

const ContactInfoSection = ({ formData, formErrors, handleChange }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-5">
        <div className="flex items-center justify-center w-6 h-6 bg-black text-white rounded-full text-sm mr-2.5">1</div>
        <h2 className="text-lg font-medium">Información de contacto</h2>
      </div>
      
      <FormGroup error={formErrors.email}>
        <Label htmlFor="email">Email *</Label>
        <Input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}
      </FormGroup>
      
      <FormRow cols="grid-cols-1 md:grid-cols-2">
        <FormGroup error={formErrors.firstName}>
          <Label htmlFor="firstName">Nombre *</Label>
          <Input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={formData.firstName}
            onChange={handleChange}
          />
          {formErrors.firstName && <ErrorMessage>{formErrors.firstName}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup error={formErrors.lastName}>
          <Label htmlFor="lastName">Apellido *</Label>
          <Input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={formData.lastName}
            onChange={handleChange}
          />
          {formErrors.lastName && <ErrorMessage>{formErrors.lastName}</ErrorMessage>}
        </FormGroup>
      </FormRow>
      
      <FormGroup error={formErrors.phone}>
        <Label htmlFor="phone">Teléfono *</Label>
        <Input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={formData.phone}
          onChange={handleChange}
        />
        {formErrors.phone && <ErrorMessage>{formErrors.phone}</ErrorMessage>}
      </FormGroup>
    </div>
  );
};

export default ContactInfoSection;