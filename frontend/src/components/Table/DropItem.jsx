import { useState } from "react";
import { Trash } from "react-feather";
import ModalDrop from "../Modal/ModalDrop"


export default function DropItem({ onDelete }) {
  const [open, setOpen] = useState(false);

  const handleDrop = () => {
    onDelete();
    setOpen(false);
  };

  return (
    <>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700 transition"
        onClick={() => setOpen(true)} 
      >
        <Trash size={18} />
        Delete
      </button>

      <ModalDrop open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          <Trash size={56} className="mx-auto text-red-500" />
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-bold text-gray-800">Confirm Delete</h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this item?
            </p>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-red-600 text-white w-full py-2 rounded-lg hover:bg-red-700 transition"
              onClick={handleDrop} // Trigger deletion
            >
              Delete
            </button>
            <button
              className="bg-gray-200 text-gray-700 w-full py-2 rounded-lg hover:bg-gray-300 transition"
              onClick={() => setOpen(false)} // Close modal on cancel
            >
              Cancel
            </button>
          </div>
        </div>
      </ModalDrop>
    </>
  );
}
