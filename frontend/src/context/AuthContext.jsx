import React from "react";

/**
 * Authentication context for managing user authentication state and actions.
 * Provides access to user data, authentication status, login, and registration functions.
 *
 * @type {React.Context<{
 *   user: Object | null,
 *   isAuthenticated: boolean,
 *   login: (credentials: Object) => void,
 *   register: (credentials: Object) => void
 * } | null>}
 */
export const AuthContext = React.createContext(null);
