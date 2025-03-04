import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { logout } from "../features/auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import fetchUser from "../features/user/actions/fetchUser";
import deleteUser from "../features/user/actions/deleteUser";
import updateUser from "../features/user/actions/updateUser";

export default function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { userInfo, loadingUser, errorUser } = useSelector((state) => state.users);
  
  const [editMode, setEditMode] = useState({ field: null, value: "" });

  useEffect(() => {
    if (user?.sub) {
      dispatch(fetchUser(user.sub));
    }
  }, [dispatch, user?.sub]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    window.location.reload();
  };

  const handleEdit = (field, currentValue) => {
    setEditMode({ field, value: currentValue });
  };

  const handleSave = (field) => {
    dispatch(updateUser({ id: userInfo.id, userData: { [field]: editMode.value } }));
    setEditMode({ field: null, value: "" });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your profile? This action cannot be undone.")) {
      dispatch(deleteUser(userInfo.id));
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Welcome, {userInfo?.username || "User"}</h2>
        <p className="text-gray-600 mt-2">Your Profile Information</p>
      </div>

      <div className="space-y-6">
        {["username", "email", "fullName"].map((field) => (
          <div key={field} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 capitalize">{field}</h3>
              {editMode.field === field ? (
                <input
                  type="text"
                  className="border p-2 rounded w-full"
                  value={editMode.value}
                  onChange={(e) => setEditMode({ ...editMode, value: e.target.value })}
                />
              ) : (
                <p className="text-gray-600">{userInfo?.[field] || "N/A"}</p>
              )}
            </div>

            {editMode.field === field ? (
              <button onClick={() => handleSave(field)} className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300">
                Save
              </button>
            ) : (
              <button onClick={() => handleEdit(field, userInfo?.[field] || "")}
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
                Edit
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button onClick={handleLogout} className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300">
          Logout
        </button>
        <button onClick={handleDelete} className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300">
          Delete Profile
        </button>
      </div>
    </div>
  );
}
