import React, { useEffect, useState } from 'react';
import UserService from '../../../services/UserService';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function ManageUsers() {
  const token = localStorage.getItem('token');
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0); 
  const [totalPages, setTotalPages] = useState(0); 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await UserService.getAllUsers(token, page);
        setUsers(response.content); 
        setTotalPages(response.page.totalPages); 
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [token, page]); // Re-fetch users when page changes

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="container m-13">
      <div className='py-10'>
        <div className="flex items-center justify-center text-black text-2xl font-semibold mb-6">
          <h1 className="underline">Manage Users</h1>
        </div>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Username</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Full Name</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.fullName || 'N/A'}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2 flex items-center space-x-2">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                      <FaEdit className="inline-block mr-2" />
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                    >
                      <FaTrash className="inline-block mr-2" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center mt-6">
          <button
            className="px-4 py-2 bg-gray-300 rounded-l-md hover:bg-gray-400 disabled:opacity-50"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 0}
          >
            Previous
          </button>
          <span className="px-4 py-2">{`Page ${page + 1} of ${totalPages}`}</span>
          <button
            className="px-4 py-2 bg-gray-300 rounded-r-md hover:bg-gray-400 disabled:opacity-50"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
