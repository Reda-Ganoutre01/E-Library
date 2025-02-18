// src/components/Alert.js
import React, { useEffect, useState } from 'react';

export default function Alert({ message, onClose, type }) {
  const [visible, setVisible] = useState(true);
  const alertStyles = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  // Auto-hide the alert after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(); // Call onClose when it disappears
    }, 5000);

    return () => clearTimeout(timer); // Clear the timeout if component unmounts
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className={`fixed top-10 left-1/2 transform -translate-x-1/2 w-full max-w-md p-4 ${alertStyles} text-white rounded-lg shadow-lg transition-opacity duration-500 ease-in-out opacity-100`}>
      <div className="flex justify-between items-center">
        <p className="text-sm">{message}</p>
        <button onClick={() => setVisible(false)} className="ml-4 text-lg font-semibold">
          &times;
        </button>
      </div>
    </div>
  );
}
