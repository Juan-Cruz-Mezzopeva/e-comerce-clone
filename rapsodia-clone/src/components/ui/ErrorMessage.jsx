import React from 'react';

const ErrorMessage = ({ children }) => {
  return (
    <div className="text-red-600 text-xs mt-1">{children}</div>
  );
};

export default ErrorMessage;