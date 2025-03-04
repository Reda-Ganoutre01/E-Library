import { useState } from "react";
import addUser from "../../../features/user/actions/addUser";
import Modal from "../../../components/Modal/Modal";
import { useDispatch } from "react-redux";

export default function AddUser({ showModal, setShowModal }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullName: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(addUser(formData));
  };

  return (
    <>
      {/* Modal */}
      {showModal && (
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Add New User</h2>
            <label className="block mb-2 text-gray-700">Username:</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg mb-4"
              value={formData.username}
              onChange={handleChange}
              name="username"
            />

            <label className="block mb-2 text-gray-700">Full Name:</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg mb-4"
              value={formData.fullName}
              onChange={handleChange}
              name="fullName"
            />

            <label className="block mb-2 text-gray-700">Email:</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg mb-4"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />

            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
