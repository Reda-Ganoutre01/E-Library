import LoginForm from "../../components/form/auth/LoginForm.jsx";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";

/**
 * LoginPage component that manages the user login process.
 * It handles the authentication logic and passes necessary props to the LoginForm component.
 * 
 * @returns {JSX.Element} The LoginPage component containing the LoginForm.
 */
export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  /**
   * Handles the login form submission.
   * Dispatches the login action and navigates to the home page if authentication is successful.
   * 
   * @param {Object} credentials - The user's login credentials.
   */
  const handleLoginSubmit = (credentials) => {
    login(credentials);
    if (error === null) {
      navigate('/');
    }
  };

  return (
    <section className="h-[40rem] flex items-center justify-center">
      <LoginForm
        credentials={credentials}
        setCredentials={setCredentials}
        loading={loading}
        error={error}
        onSubmit={handleLoginSubmit}
      />
    </section>
  );
}