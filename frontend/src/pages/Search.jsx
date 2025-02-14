import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import bookService from '../services/bookService';
import { BookCard } from '../components/Book/BookCard';

export default function Search() {
    const { search } = useParams();
    const [booksSearch, setBooksSearch] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // Loading state

    useEffect(() => {
        if (!search) return;

        setLoading(true);  // Set loading to true when starting search
        setBooksSearch([]); // Clear previous books
        setError(null);

        bookService.searchBooks(search)
            .then((response) => {
                setBooksSearch(response.data);
                setLoading(false);  // Stop loading after fetching
            })
            .catch((error) => {
                console.error("Error fetching books:", error);
                setError("Une erreur s'est produite lors de la recherche.");
                setLoading(false);  // Stop loading after error
            });
    }, [search]); // Trigger the effect whenever `search` changes

    useEffect(() => {
        console.log("Books found:", booksSearch);
    }, [booksSearch]);

    return (
        <div className="container mx-auto px-4">
            <div data-aos="zoom-in-down" className="flex text-3xl justify-center p-4 underline decoration-primary">
                Tous les Livres
            </div>

            {/* Error message display */}
            {error && (
                <div role="alert" className="alert alert-warning bg-red-500 text-white p-4 rounded-lg mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>{error}</span>
                </div>
            )}

            {/* Loading Spinner */}
            {loading && (
                <div className="flex justify-center items-center mb-4">
                    <div className="w-16 h-16 border-4 border-t-4 border-gray-600 border-solid rounded-full animate-spin"></div>
                </div>
            )}

            {/* Book grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {booksSearch.length > 0 ? (
                    booksSearch.map((book) => <BookCard key={book.id} book={book} />)
                ) : (
                    !loading && <p className="text-center col-span-full">Aucun livre trouvé.</p> // Display message if no books found
                )}
            </div>
        </div>
    );
}
