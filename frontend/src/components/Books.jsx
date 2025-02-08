import { lazy, Suspense, useEffect, useState } from "react";
import { booksList } from "../constants/BooksConstant";

// Lazy load the BookCard component
const BookCard = lazy(() => import("../components/BookCard"));

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksList);
  }, []);

  return (
    <>
   
        

        {/* Suspense to handle lazy-loaded component */}
        <Suspense fallback={<div>Loading...</div>}>
        <div className="container p-10">
        <div className="title">
          <h2 className="text-2xl my-5">Popular Books</h2>
        </div>

          {/* Grid layout with 4 books per row on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          </div>
        </Suspense>
    
    </>
  );
};

export default Books;
