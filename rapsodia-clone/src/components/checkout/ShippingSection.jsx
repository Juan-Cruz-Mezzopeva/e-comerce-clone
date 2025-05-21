// components/checkout/ShippingSection.jsx
import React from 'react';
import { FormGroup, FormRow, Label, Input, Select, RadioOption } from '../ui/FormElements';
import ErrorMessage from '../ui/ErrorMessage';

const ShippingSection = ({ formData, formErrors, handleChange, subtotal }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-5">
        <div className="flex items-center justify-center w-6 h-6 bg-black text-white rounded-full text-sm mr-2.5">2</div>
        <h2 className="text-lg font-medium">Método de envío</h2>
      </div>
      
      <div className="mb-5">
        <RadioOption 
          selected={formData.deliveryType === 'home'}
          onClick={() => {
            const e = {
              target: {
                name: 'deliveryType',
                value: 'home'
              }
            };
            handleChange(e);
          }}
        >
          <input 
            type="radio" 
            id="delivery_home" 
            name="deliveryType" 
            value="home"
            checked={formData.deliveryType === 'home'}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="delivery_home" className="flex justify-between w-full cursor-pointer">
            <span>Envío a domicilio</span>
            <span className="font-medium">
              {subtotal >= 300000 ? 'Gratis' : '$ 15.000'}
            </span>
          </label>
        </RadioOption>
        
        <RadioOption 
          selected={formData.deliveryType === 'store'}
          onClick={() => {
            const e = {
              target: {
                name: 'deliveryType',
                value: 'store'
              }
            };
            handleChange(e);
          }}
        >
          <input 
            type="radio" 
            id="delivery_store" 
            name="deliveryType" 
            value="store"
            checked={formData.deliveryType === 'store'}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="delivery_store" className="flex justify-between w-full cursor-pointer">
            <span>Retirar en tienda</span>
            <span className="font-medium">Gratis</span>
          </label>
        </RadioOption>
      </div>
      
      {formData.deliveryType === 'home' ? (
        <>
          <FormRow cols="grid-cols-3 md:grid-cols-3fr-1fr">
            <FormGroup error={formErrors.address} className="col-span-2">
              <Label htmlFor="address">Calle *</Label>
              <Input 
                type="text" 
                id="address" 
                name="address" 
                value={formData.address}
                onChange={handleChange}
              />
              {formErrors.address && <ErrorMessage>{formErrors.address}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup error={formErrors.addressNumber}>
              <Label htmlFor="addressNumber">Número *</Label>
              <Input 
                type="text" 
                id="addressNumber" 
                name="addressNumber" 
                value={formData.addressNumber}
                onChange={handleChange}
              />
              {formErrors.addressNumber && <ErrorMessage>{formErrors.addressNumber}</ErrorMessage>}
            </FormGroup>
          </FormRow>
          
          <FormGroup>
            <Label htmlFor="apartment">Piso / Departamento</Label>
            <Input 
              type="text" 
              id="apartment" 
              name="apartment" 
              value={formData.apartment}
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormRow cols="grid-cols-1 md:grid-cols-3">
            <FormGroup error={formErrors.postalCode}>
              <Label htmlFor="postalCode">Código Postal *</Label>
              <Input 
                type="text" 
                id="postalCode" 
                name="postalCode" 
                value={formData.postalCode}
                onChange={handleChange}
              />
              {formErrors.postalCode && <ErrorMessage>{formErrors.postalCode}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup error={formErrors.city}>
              <Label htmlFor="city">Ciudad *</Label>
              <Input 
                type="text" 
                id="city" 
                name="city" 
                value={formData.city}
                onChange={handleChange}
              />
              {formErrors.city && <ErrorMessage>{formErrors.city}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup error={formErrors.province}>
              <Label htmlFor="province">Provincia *</Label>
              <Select 
                id="province" 
                name="province" 
                value={formData.province}
                onChange={handleChange}
              >
                <option value="">Seleccionar</option>
                <option value="buenosaires">Buenos Aires</option>
                <option value="caba">CABA</option>
                <option value="catamarca">Catamarca</option>
                {/* Add remaining provinces */}
                <option value="cordoba">Córdoba</option>
                <option value="tucuman">Tucumán</option>
              </Select>
              {formErrors.province && <ErrorMessage>{formErrors.province}</ErrorMessage>}
            </FormGroup>
          </FormRow>
        </>
      ) : (
        <FormGroup error={formErrors.storeLocation}>
          <Label htmlFor="storeLocation">Selecciona una tienda *</Label>
          <Select 
            id="storeLocation" 
            name="storeLocation" 
            value={formData.storeLocation}
            onChange={handleChange}
          >
            <option value="">Seleccionar tienda</option>
            <option value="palermo">Rapsodia Palermo - Av. Coronel Díaz 1960</option>
            <option value="recoleta">Rapsodia Recoleta - Av. Quintana 470</option>
            <option value="alcorta">Rapsodia Alcorta Shopping - Jerónimo Salguero 3172</option>
            <option value="unicenter">Rapsodia Unicenter - Paraná 3745</option>
            <option value="distrito">Rapsodia Distrito Arcos - Paraguay 4979</option>
          </Select>
          {formErrors.storeLocation && <ErrorMessage>{formErrors.storeLocation}</ErrorMessage>}
        </FormGroup>
      )}
    </div>
  );
};

export default ShippingSection;