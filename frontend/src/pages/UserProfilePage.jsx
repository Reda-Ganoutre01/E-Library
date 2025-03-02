
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "../features/auth/AuthSlice";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { user } = useSelector((state) => state.auth);

  useEffect(()=>{
  },[dispatch])

  console.log(user)
  const handleLogout = () => {
   dispatch(logout())
   navigate("/")
   window.location.reload();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Welcome, {user?.sub || "User"}</h2>
        <p className="text-gray-600 mt-2">Your Profile Information</p>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Username</h3>
            <p className="text-gray-600">{user?.role || "N/A"}</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
            Edit
          </button>
        </div>

        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Email</h3>
            <p className="text-gray-600">{user?.id || "N/A"}</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
            Edit
          </button>
        </div>

        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Full Name</h3>
            <p className="text-gray-600">{user?.sub || "N/A"}</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
            Edit
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}