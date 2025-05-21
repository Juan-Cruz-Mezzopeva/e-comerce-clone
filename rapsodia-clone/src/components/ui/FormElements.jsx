// components/ui/FormElements.jsx
import React from 'react';
import ErrorMessage from './ErrorMessage';

export const FormGroup = ({ children, error }) => {
  return (
    <div className="mb-5" data-error={!!error}>
      {children}
    </div>
  );
};

export const FormRow = ({ children, cols = "grid-cols-1" }) => {
  return (
    <div className={`grid ${cols} gap-5`}>
      {children}
    </div>
  );
};

export const Label = ({ htmlFor, children }) => {
  return (
    <label 
      htmlFor={htmlFor} 
      className="block text-sm mb-1"
    >
      {children}
    </label>
  );
};

export const Input = ({ type, id, name, value, onChange, placeholder = "" }) => {
  return (
    <input 
      type={type} 
      id={id} 
      name={name} 
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-3 border border-gray-300 text-sm focus:outline-none focus:border-black"
    />
  );
};

export const Select = ({ id, name, value, onChange, children }) => {
  return (
    <select 
      id={id} 
      name={name} 
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-gray-300 text-sm focus:outline-none focus:border-black appearance-none bg-no-repeat bg-right-5 pr-8"
      style={{
        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
        backgroundSize: '12px',
        backgroundPosition: 'right 10px center'
      }}
    >
      {children}
    </select>
  );
};

export const RadioOption = ({ selected, onClick, children }) => {
  return (
    <div 
      className={`flex items-center p-3 border mb-2.5 cursor-pointer ${selected ? 'border-black' : 'border-gray-300 hover:border-black'}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CheckboxInput = ({ id, name, checked, onChange, children }) => {
  return (
    <div className="flex items-center text-sm">
      <input 
        type="checkbox" 
        id={id} 
        name={name} 
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      <label htmlFor={id} className="cursor-pointer">
        {children}
      </label>
    </div>
  );
};