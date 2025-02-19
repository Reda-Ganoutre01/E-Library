import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BorrowService from "../../services/BorrowService"; // Assuming API service for fetching borrow records

const BorrowRecord = () => {
  const [borrowRecords, setBorrowRecords] = useState([]);

  useEffect(() => {
    const fetchBorrowRecords = async () => {
      try {
        const data = await BorrowService.getAllBorrows(); // Fetch borrow records
        setBorrowRecords(data);
      } catch (error) {
        console.error("Error fetching borrow records:", error);
      }
    };

    fetchBorrowRecords();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Borrowed Books</h2>

        {borrowRecords.length === 0 ? (
          <p className="text-gray-600">No borrow records found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-3">User</th>
                  <th className="border p-3">Book Title</th>
                  <th className="border p-3">Borrow Date</th>
                  <th className="border p-3">Return Status</th>
                  <th className="border p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {borrowRecords.map((record, index) => (
                  <tr key={index} className="text-center border">
                    <td className="border p-3">{record.user}</td>
                    <td className="border p-3">{record.bookTitle}</td>
                    <td className="border p-3">{record.borrowDate}</td>
                    <td className={`border p-3 ${record.returned ? "text-green-600" : "text-red-600"}`}>
                      {record.returned ? "Returned" : "Pending"}
                    </td>
                    <td className="border p-3">
                      <Link to={`/borrow/${record.id}`} className="text-blue-600 hover:underline">
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BorrowRecord;
