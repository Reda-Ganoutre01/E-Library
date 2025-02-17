
import { LockClosedIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/24/solid"; // Added user icon
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
      const token = localStorage.getItem('token');
      await UserService.register(formData, token);
      setFormData({
        username: "",
        fullname: "",
        email: "",
        password: "",

      })
      alert('User registered successfully')
      navigate('/profile');

    }
    catch (error) {
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
        <h2 className="text-center text-2xl font-bold text-gray-900">Register</h2>



        <form onSubmit={handleSubmit} className="space-y-4">
          {/* User Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <div className="relative mt-1">
              <UserIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full rounded-md border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="John"
              />
            </div>
            {errors && <p className="text-sm text-red-500">{errors}</p>}
          </div>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="relative mt-1">
              <UserIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={formData.fullname}
                onChange={handleInputChange}
                required
                className="w-full rounded-md border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            {errors && <p className="text-sm text-red-500">{errors}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="relative mt-1">
              <EnvelopeIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="example@email.com"
              />
            </div>
          </div>


          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <LockClosedIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
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
