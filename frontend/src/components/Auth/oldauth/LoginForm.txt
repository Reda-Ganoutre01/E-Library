import { useState } from "react";
import { LockClosedIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { jwtDecode } from "jwt-decode";
import FormInput from "../Form/FormInput"; // Make sure the correct path is used
import Btn from "../Form/Btn";
import ErrorMessage from "../Form/ErrorMessage";

export default function LoginForm() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("1234");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await UserService.login(username, password);
      if (userData?.token) {
        localStorage.setItem("token", userData.token);

        // Decode the token
        const decodedToken = jwtDecode(userData.token);
        const userRole = decodedToken.role;

        localStorage.setItem("role", userRole);
        localStorage.setItem("username", username);

        if (userRole === "USER") {
          alert("User login successfully");
          navigate("/profile");
        } else if (userRole === "LIBRARIAN") {
          alert("Librarian login successfully");
          navigate("/admin");
        }

        window.location.reload();
      } else {
        setErrors({ general: userData?.error || "Login failed. Please try again." });
      }
    } catch (error) {
      console.error(error);
      setErrors({ general: "An error occurred. Please try again later." });

      setTimeout(() => {
        setErrors({});
      }, 5000);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900">Login</h2>

        {errors.general && (
          <ErrorMessage message={errors.general}/>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            icon={EnvelopeIcon}
            placeholder="Enter your username"
            required
            error={errors.username}
          />

          {/* Password Field */}
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={LockClosedIcon}
            placeholder="••••••••"
            required
            error={errors.password}
          />

          {/* Submit Button */}
          <Btn
            type="submit"
            classname="w-full rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition disabled:bg-gray-400"
            text="Login"
          />
        </form>

        {/* Link to Register */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
