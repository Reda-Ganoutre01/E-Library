import { LockClosedIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/24/solid"; 
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData=await UserService.register(formData);
      if (userData.token) {
        localStorage.setItem('token', userData.token);
        localStorage.setItem('role', userData.role);
        localStorage.setItem('username',formData.username)
        setFormData({
          username: "",
          full_name: "",
          email: "",
          password: "",
        });
        alert('User Register successfully')
        navigate('/profile');
        window.location.reload();
      } else {
        setErrors(userData.error);
      }
      
      alert('User registered successfully');
      navigate('/profile');
    } catch (error) {
      console.log(error);
      setErrors({ general: error.message });
      setTimeout(() => {
        setErrors('');
      }, 5000);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <div className="relative mt-1">
              <UserIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                className="w-full rounded-md border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="John"
              />
            </div>
            {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="relative mt-1">
              <UserIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="fullname"
                value={formData.full_name}
                onChange={handleInputChange}
                required
                className="w-full rounded-md border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            {errors.fullname && <p className="text-sm text-red-500">{errors.fullname}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="relative mt-1">
              <EnvelopeIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="example@email.com"
              />
            </div>
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <LockClosedIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full rounded-md border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account? <Link to={"/login"} className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
