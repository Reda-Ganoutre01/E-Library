import { useState } from "react";
import { LockClosedIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";

export default function LoginPage() {
  const [username, setusername] = useState('reda1');
  const [password, setPassword] = useState('1234');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await UserService.login(username, password);
      if (userData.token) {
        localStorage.setItem('token', userData.token);
        localStorage.setItem('role', userData.role);
        localStorage.setItem('username',username)
        alert('User login successfully')
        navigate('/profile');
        window.location.reload();
      } else {
        setErrors(userData.error);
      }
    } catch (error) {
      console.log(error);
      setErrors({ general: error.message });
      setTimeout(() => {
        setErrors('');
      }, 5000);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900">Login</h2>

        {/* Display form errors */}
        {errors && (
          <p className="text-sm text-red-500 bg-red-100 p-2 rounded-md">
            {errors.general}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <div className="relative mt-1">
              <EnvelopeIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="example@email.com"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <LockClosedIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            Login
          </button>
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
