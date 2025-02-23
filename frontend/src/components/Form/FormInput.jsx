import React from 'react';
import ErrorMessage from './ErrorMessage';

const FormInput = ({ label, type, name, value, onChange, icon: Icon, placeholder, required, error }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative mt-1">
        {Icon && <Icon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full rounded-md border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
        />
      </div>
      {error && <ErrorMessage message={error}/>
      }
    </div>
  );
};

export default FormInput;
