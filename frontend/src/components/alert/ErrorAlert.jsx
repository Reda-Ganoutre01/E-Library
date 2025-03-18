import React  from "react";
import Portal from "../../utils/Portal";
import Alert  from "./Alert";
import { FaInfoCircle } from "react-icons/fa";

export default function ErrorAlert({ message, onClose }) {
  return (
    <Portal>
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg">
        <Alert title="Error" text={message} className={'alert alert-error w-full rounded-none text-center flex justify-center items-center'} onClose={onClose} />
      </div>
    </Portal>
  );
}
