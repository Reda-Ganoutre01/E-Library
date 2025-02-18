  import { useNavigate } from "react-router-dom";
  import UserService from "../services/UserService";
  import { useEffect, useState } from "react";

  export default function UserProfile() {
    const navigate = useNavigate(); 
    const [profileData, setProfileData] = useState(null); // Use null to signify no data yet
    const [loading, setLoading] = useState(true); // Handle loading state
    const [errors, setErrors] = useState('');
    const token = localStorage.getItem('token');
    const username=localStorage.getItem('username')

    useEffect(() => {
      fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async () => {
      try {
        const response = await UserService.getYourProfile(token);
        setProfileData(response.data);
      } catch (e) {
        console.error(e);
        setErrors('Failed to load profile data');
      } finally {
        setLoading(false); // Always turn off loading when done
      }
    };

    const logout = () => {
      const confirmDelete = window.confirm("Are you sure you want to delete this user?");
      if (confirmDelete) {
        UserService.logout();
        navigate("/");
      }
    };

    if (loading) {
      return <div>Loading...</div>; // Show loading message while data is being fetched
    }

    if (errors) {
      return <div>{errors}</div>; // Show any error message if the fetch fails
    }

    return (
      <div className="container p-4">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          {/* Header */}
          <div className="flex items-center space-x-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{username}</h2>
            </div>
          </div>

          {/* Profile Information */}
          <div className="mt-8 space-y-4">
            {/* Username */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Username</h3>
                <p className="text-gray-600">{profileData?.username}</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
                Modifier
              </button>
            </div>

            {/* Email */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">{profileData?.email}</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
                Modifier
              </button>
            </div>

            {/* Full Name */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Full Name</h3>
                <p className="text-gray-600">{profileData?.fullname}</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
                Modifier
              </button>
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={logout}
              className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
