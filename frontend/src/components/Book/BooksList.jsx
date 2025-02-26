import { useEffect, useState } from "react";
import bookService from "../../services/bookService";
import { BookCard } from "./BookCard";


export default function BooksList() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10; 
  useEffect(() => {
    fetchBooks(currentPage);
  }, [currentPage]);

  const fetchBooks = (page) => {
    bookService.getAllBooks(page, pageSize) 
      .then((response) => {
        setBooks(response.data.content);
        setTotalPages(response.data.page.totalPages);
      })
      .catch((error) => console.error("Error fetching books:", error));
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container">
      <div data-aos="zoom-in-down" className="flex text-3xl justify-center p-4 underline decoration-primary">
        All Books
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-4">
        <button 
          onClick={goToPrevPage} 
          disabled={currentPage === 0} 
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="px-4 py-2">
          Page {currentPage + 1} of {totalPages}
        </span>

        <button 
          onClick={goToNextPage} 
          disabled={currentPage >= totalPages - 1} 
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
