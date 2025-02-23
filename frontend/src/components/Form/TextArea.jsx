import React from "react";
import ErrorMessage from "../Form/ErrorMessage"; // Assuming ErrorMessage is properly defined

const TextArea = ({ label, name, placeholder, register, error, rows = 4, ...rest }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea
        rows={rows}
        className={`w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : ""}`}
        placeholder={placeholder}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default TextArea;
