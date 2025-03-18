import { FaInfoCircle, FaTimes } from "react-icons/fa";

export default function Alert({ title, text, className, onClose }) {
  return (
    <div
      role="alert"
      className={className}
    >
      <FaInfoCircle className="size-4" />
      <span className="font-bold">{title}</span>
      <span>{text}</span>
      {onClose && (
        <button className="btn btn-sm btn-ghost ml-2" onClick={onClose}>
          <FaTimes className="size-4" />
        </button>
      )}
    </div>
  );
}
