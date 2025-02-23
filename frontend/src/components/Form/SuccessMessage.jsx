import React from "react";

const SuccessMessage = ({ message }) => {
  return (
    <p className="text-sm text-green-500 bg-green-100 p-2 rounded-md">
      {message}
    </p>
  );
};

export default SuccessMessage;
