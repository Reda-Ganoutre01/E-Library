  import { useState } from "react";
  import { LockClosedIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
  import { Link, useNavigate } from "react-router-dom";
  import FormInput from "../Form/FormInput"; 
  import Btn from "../Form/Btn";
  import { useDispatch, useSelector } from "react-redux";
import authenticateUser from "../../features/auth/actions/authenticateUser";

  export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, user, token } = useSelector((state) => state.auth);
  
    const [credentials, setCredentials] = useState({ username: "reda", password: "1234" });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await dispatch(authenticateUser(credentials));
  
      if (token) {
        if (user?.role === "USER") {
          alert("User login successfully");
          navigate("/profile");
        } else if (user?.role === "LIBRARIAN") {
          alert("Librarian login successfully");
          navigate("/admin");
        }
        window.location.reload();
      }
    };

    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-center text-2xl font-bold text-gray-900">Login</h2>
          {error && (
    <p className="text-center text-red-500 text-sm">{error}</p>
  )}

          

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              label="Username"
              type="text"
              name="username"
              value={credentials.username}
              onChange={(e) => setCredentials((prev) => ({ ...prev, username: e.target.value }))}
              icon={EnvelopeIcon}
              placeholder="Enter your username"
              required
            />

            {/* Password Field */}
            <FormInput
              label="Password"
              type="password"
              name="password"
              value={credentials.password}
              onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
              icon={LockClosedIcon}
              placeholder="••••••••"
              required
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
