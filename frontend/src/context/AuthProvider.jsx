import { AuthContext } from "./AuthContext.jsx";
import { useDispatch, useSelector } from "react-redux";
import authenticateUser from "../features/auth/actions/authenticateUser";
import registerUser from "../features/auth/actions/registerUser";
import isTokenExpired from "../utils/isTokenExpired.js"
import { useEffect , useMemo } from "react";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const { user, isAuthenticated, token } = useSelector((state) => state.auth);

  /**
   * Handles user login by dispatching the authentication action.
   *
   * @param {Object} credentials - The user's login credentials.
   */
  const login = (credentials) => {
    dispatch(authenticateUser(credentials));
  };

  /**
   * Handles user registration by dispatching the registration action.
   *
   * @param {Object} credentials - The user's registration credentials.
   */
  const register = (credentials) => {
    dispatch(registerUser(credentials));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (token && isTokenExpired(token)) {
      handleLogout();
    }
  }, [token]);

  const value = useMemo(
    () => ({
      user,
      login,
      isAuthenticated,
      register,
      logout: handleLogout,
    }),
    [user, isAuthenticated, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}