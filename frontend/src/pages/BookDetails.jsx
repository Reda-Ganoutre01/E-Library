import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import bookService from '../services/bookService';
import { getImgUrl } from '../utils/getImgUrl';

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    bookService.getBookById(id)
      .then((response) => setBook(response.data))
      .catch((error) => console.error('Error fetching book data:', error));
  }, [id]);

  const handleBorrow = () => {
    alert(`You have borrowed the book: ${book.title}`);
  };

  if (!book) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
        <div className="flex justify-center mb-6">
          <img
            src={`${getImgUrl(book.cover)}`}
            alt={book.title}
            className="w-48 h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">{book.title}</h1>
        <p className="text-sm text-gray-600 mb-2"><strong>Author:</strong> {book.author}</p>
        <p className="text-sm text-gray-600 mb-4"><strong>Description:</strong> {book.description}</p>
        <p className="text-sm text-gray-600 mb-2"><strong>ISBN:</strong> {book.isbn || 'N/A'}</p>
        <p className="text-sm text-gray-600 mb-2"><strong>Copies Available:</strong> {book.copies}</p>
        <p className="text-sm text-gray-600 mb-6"><strong>Category:</strong> {book.category}</p>
        <button
          onClick={handleBorrow}
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transform transition-all hover:scale-105"
        >
          Emprunt
        </button>
      </div>
    </div>
  );
}
