import { useEffect, useState } from 'react';
import BookCard from './BookCard';

export const Books = () => {
    const [books, setBooks] = useState();

    useEffect(() => {
        fetch('http://localhost:8080/api/books', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // No need for authentication tokens here
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setBooks(data); // Save the books data to state
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    }, []);

    return (
        <>
            <h1>Books List</h1>
            <div className="container">
                {books && books.map((e) => (
                    <BookCard key={e.id} book={e} />
                ))}
            </div>
        </>
    );
};
