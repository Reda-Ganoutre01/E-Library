import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const navigate = useNavigate(); 
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true); 
  const [errors, setErrors] = useState(null); 

  const username = localStorage.getItem('username');

  useEffect(() => {
    if (username) {
      fetchProfileInfo();
    } else {
      setErrors({ message: "Username is not available." });
      setLoading(false);
    }
  }, [username]);

  const fetchProfileInfo = async () => {
    try {
      const response = await UserService.getYourProfile(username);
      setProfileData(response);
    } catch (e) {
      console.error(e);
      setErrors({ message: 'Failed to load profile data' });
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      UserService.logout();
      navigate("/");
      window.location.reload();
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center p-4 text-lg">Loading...</div>; 
  }

  if (errors) {
    return <div className="text-center text-red-600">{errors.message}</div>; 
  }
  console.log(username)

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Welcome, {username}</h2>
        <p className="text-gray-600 mt-2">Your Profile Information</p>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Username</h3>
            <p className="text-gray-600">{profileData?.username}</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
            Edit
          </button>
        </div>

        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Email</h3>
            <p className="text-gray-600">{profileData?.email}</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
            Edit
          </button>
        </div>

        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Full Name</h3>
            <p className="text-gray-600">{profileData?.fullName}</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
            Edit
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={logout}
          className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </div>
    
  );
}
