import { lazy, useEffect, useState } from "react";
import bookService from "../services/bookService.js";

import { BookCard } from "../components/Book/BookCard.jsx";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookService.getBooks().then((response) => setBooks(response.data.content));
  }, []);

  return (
    <div className="container">
      <div 
            data-aos="zoom-in-down"

      className="flex text-3xl justify-center p-4 underline decoration-primary">
        All Books
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
