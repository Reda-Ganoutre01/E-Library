import { LockClosedIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../Form/Btn";
import FormInput from "../Form/FormInput";
import { useDispatch, useSelector } from "react-redux";
import registerUser from "../../features/auth/actions/registerUser";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
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
    dispatch(registerUser(formData));
    navigate("/profile");


  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900">Register</h2>

        {error && <p className="text-sm text-red-500">{error}</p>}

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
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            icon={UserIcon}
            placeholder="Enter your full name"
            required
            error={errors.fullName}
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
            text={loading ? "Registering..." : "Register"}
            disabled={loading}
          />
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account? <Link to={"/login"} className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
