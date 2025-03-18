import RegisterForm from "../../components/form/auth/RegisterForm";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import { useState } from "react";


export default function RegisterPage() {
    const { register } = useAuth();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);
    const [credentials, setCredentials] = useState({
      username: "",
      fullName : "",
      email: "",
      password: "",
    });
  
    
    const handleRegisterSubmit = (credentials) => {
      register(credentials);
      if (error === null) {
        navigate("/");
      }
    };
  
    return (
      <section className="h-[40rem] flex items-center justify-center">
        <RegisterForm
          credentials={credentials}
          setCredentials={setCredentials}
          loading={loading}
          error={error}
          onSubmit={handleRegisterSubmit}
        />
      </section>
    );
  }