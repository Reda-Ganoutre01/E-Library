import { X } from "react-feather";

export default function ModalDrop({ open, onClose, children }) {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative bg-white rounded-xl shadow-lg p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-lg text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 transition"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}
