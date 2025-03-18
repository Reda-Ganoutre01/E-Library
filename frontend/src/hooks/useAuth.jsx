import { AuthContext } from "../context/AuthContext.jsx";
import { useContext } from "react";


/**
 * Custom hook to access authentication context.
 *
 * @returns {Object|null} The authentication context value, containing user data, authentication status,
 * login, and registration functions. Returns `null` if the context is not available.
 */
export default function useAuth() {
  return useContext(AuthContext);
}
