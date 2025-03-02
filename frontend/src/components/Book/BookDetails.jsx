import { getImgUrl } from "../../utils/getImgUrl";

export default function BookDetails({id,book}) {
 

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
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">{book.title}</h1>
        <p className="text-lg text-gray-700 mb-2"><strong>Author:</strong> {book.author}</p>
        <p className="text-base text-gray-600 mb-4"><strong>Description:</strong> {book.description}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>ISBN:</strong> {book.isbn || 'N/A'}</p>
        
        <div className="flex items-center justify-between mb-6">
          <p className="text-lg text-gray-700"><strong>Copies Available:</strong> {book.copies}</p>
          <span className={book.copies > 0 ? 'text-green-500 font-semibold' : 'text-red-500 font-semibold'}>
            {book.copies > 0 ? 'Available' : 'Not Available'}
          </span>
        </div>

        <p className="text-base text-gray-700 mb-6"><strong>Category:</strong> {book.category}</p>

        <button
          onClick={handleBorrow}
          disabled={book.copies <= 0}
          className={`w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transform transition-all hover:scale-105 ${book.copies <= 0 ? 'bg-gray-400 cursor-not-allowed' : ''}`}
        >
          {book.copies > 0 ? 'Borrow Book' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}
