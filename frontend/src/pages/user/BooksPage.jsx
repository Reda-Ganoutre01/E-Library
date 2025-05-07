import { useEffect, useState, useCallback } from "react"
import fetchBooks                           from "../../features/book/actions/fetchBooks.js"
import { useSelector, useDispatch }         from "react-redux"
import Pagination                           from "../../components/pagination/Pagination.jsx"

import BooksList     from "../../components/book/BooksList.jsx";
import PageNavigator from "../../components/navigation/PageNavigator.jsx";


export default function BooksPage() {

    document.title = `E-Library - Books`;

    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const { books, loading, error } = useSelector((state) => state.books);

    const fetchData = useCallback(
        (page) => {
            dispatch(fetchBooks({ page, size: 5, sortBy: "title" }));
        },
        [dispatch]
    );

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage, fetchData]);

    useEffect(() => {
        setTotalPages(books?.page?.totalPages ?? 1);
    }, [books]);

    const handlePageChange = (page) => {
        const newPage = page - 1;
        setCurrentPage(newPage);
        fetchData(newPage);
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <PageNavigator title="Books" path={-1} />
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <span className="text-xl text-gray-600">Loading...</span>
                </div>
            ) : (
                <BooksList books={books} />
            )}
            <div className="mt-12 flex justify-center">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </div>
    );
}
