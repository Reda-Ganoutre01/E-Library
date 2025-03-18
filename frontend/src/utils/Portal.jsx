import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }) {
  const portalRef = useRef(document.createElement("div"));
  useEffect(() => {
    document.body.appendChild(portalRef.current);
    return () => {
      document.body.removeChild(portalRef.current);
    };
  }, []);
  return createPortal(children, portalRef.current);
}