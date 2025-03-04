import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import fetchUser from "../../../features/user/actions/fetchUser";
import updateUser from "../../../features/user/actions/updateUser";
import deleteUser from "../../../features/user/actions/deleteUser";
import Modal from "../../../components/Modal/Modal";
import { logout } from "../../../features/auth/AuthSlice";


export default function AdminProfile (){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { userInfo, loadingUser, errorUser } = useSelector((state) => state.users);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    fullName: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    if (user?.sub) {
      dispatch(fetchUser(user.sub));
    }
  }, [dispatch, user?.sub]);

  useEffect(() => {
    if (userInfo) {
      setFormData((prev) => ({
        ...prev,
        id: userInfo.id || "",
        username: userInfo.username || "N/A",
        fullName: userInfo.fullName || "N/A",
        email: userInfo.email || "N/A",
        role: userInfo.role || "N/A",
      }));
    }
  }, [userInfo]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    window.location.reload();
  };

  const handleSave = () => {
    dispatch(updateUser({ id: formData.id, userData: formData }))
    setShowModal(false)
     
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your profile? This action cannot be undone.")) {
      dispatch(deleteUser(userInfo.id));
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome, {userInfo?.username || "User"}
        </h2>
        <p className="text-gray-600 mt-2">Your Profile Information</p>
      </div>

      {loadingUser && <p>Loading...</p>}
      {errorUser && <p className="text-red-500">Error: {errorUser}</p>}

      <div className="space-y-4 bg-gray-50 p-5 rounded-lg shadow-sm">
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold text-gray-700">Username</h3>
          <p className="text-gray-600">{userInfo?.username || "N/A"}</p>
        </div>
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold text-gray-700">Email</h3>
          <p className="text-gray-600">{userInfo?.email || "N/A"}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Full Name</h3>
          <p className="text-gray-600">{userInfo?.fullName || "N/A"}</p>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
   
        <button onClick={() => setShowModal(true)} className="px-5 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">
          Edit
        </button>
       
      </div>
    {/* Modal */}
      {showModal && (
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            <label className="block mb-2 text-gray-700">Username:</label>
            <input type="text" className="w-full p-2 border rounded-lg mb-4"
              value={formData.username}
              readOnly
              onChange={(e) => setFormData({ ...formData, username: e.target.value })} />

            <label className="block mb-2 text-gray-700">Full Name:</label>
            <input type="text" className="w-full p-2 border rounded-lg mb-4"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />

            <label className="block mb-2 text-gray-700">Email:</label>
            <input type="email" className="w-full p-2 border rounded-lg mb-4"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

            <div className="flex justify-end">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300 mr-2">
                Cancel
              </button>
              <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                Save
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
