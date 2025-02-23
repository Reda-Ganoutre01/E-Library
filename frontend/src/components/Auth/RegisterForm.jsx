import { LockClosedIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import Btn from "../Form/Btn";
import FormInput from "../Form/FormInput";  // Import the FormInput component

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
      const userData = await UserService.register(formData);
      if (userData.token) {
        localStorage.setItem('token', userData.token);
        localStorage.setItem('role', userData.role);
        localStorage.setItem('username', formData.username);
        setFormData({
          username: "",
          fullname: "",
          email: "",
          password: "",
        });
        alert('User Register successfully');
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
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900">Register</h2>

        {errors.general && <p className="text-sm text-red-500">{errors.general}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Field */}
          <FormInput
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            icon={UserIcon}
            placeholder="Enter your username"
            required
            error={errors.username}
          />

          {/* Full Name Field */}
          <FormInput
            label="Full Name"
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleInputChange}
            icon={UserIcon}
            placeholder="Enter your full name"
            required
            error={errors.fullname}
          />

          {/* Email Field */}
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            icon={EnvelopeIcon}
            placeholder="example@email.com"
            required
            error={errors.email}
          />

          {/* Password Field */}
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            icon={LockClosedIcon}
            placeholder="••••••••"
            required
            error={errors.password}
          />

          <Btn
            type="submit"
            classname={"w-full rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition disabled:bg-gray-400"}
            text={"Register"}
          />
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account? <Link to={"/login"} className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
