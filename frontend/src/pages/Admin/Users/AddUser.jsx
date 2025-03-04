import  { useState } from 'react';
import Input from '../../../components/Form/Input';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../features/user/actions/addUser'; 

export default function AddUser() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    full_name: '',
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <center>
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Add User</h1>
        </center>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-600">Username</label>
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="px-4 py-2 border border-gray-300 rounded-md"
            required
            />
            
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600">Email</label>
          
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="full_name" className="text-gray-600">Full Name</label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="Full Name"
              className="px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="role" className="text-gray-600">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option disabled>Select a role</option>
              <option value="user">USER</option>
              <option value="admin">LIBRARIAN</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}
