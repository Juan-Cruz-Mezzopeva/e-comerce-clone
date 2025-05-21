// components/checkout/TermsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FormGroup } from '../ui/FormElements';
import { CheckboxInput } from '../ui/FormElements';
import ErrorMessage from '../ui/ErrorMessage';

const TermsSection = ({ formData, formErrors, handleChange }) => {
  return (
    <div className="mb-8">
      <FormGroup error={formErrors.termsAccepted}>
        <CheckboxInput
          id="termsAccepted"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
        >
          Acepto los <Link to="/terminos-condiciones" target="_blank" className="underline">términos y condiciones</Link>
        </CheckboxInput>
        {formErrors.termsAccepted && <ErrorMessage>{formErrors.termsAccepted}</ErrorMessage>}
      </FormGroup>
      
      <FormGroup>
        <CheckboxInput
          id="newsLetter"
          name="newsLetter"
          checked={formData.newsLetter}
          onChange={handleChange}
        >
          Quiero recibir novedades y promociones
        </CheckboxInput>
      </FormGroup>
    </div>
  );
};

export default TermsSection;