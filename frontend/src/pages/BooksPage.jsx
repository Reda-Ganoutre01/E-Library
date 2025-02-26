import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import BookCard from "../components/Book/BookCard";
import Pagination from "../components/pagination/Pagination";
import fetchBooks from "../features/book/actions/fetchBooks";
import { booksSelector } from "../Selectors/BookSelectors";


export default function BooksPage() {
  const dispatch = useDispatch()
        const [currentPage, setCurrentPage] = useState(0)
        const [totalPages, setTotalPages] = useState(1)
        const navigate = useNavigate()
    
        const { books, loading, error } = useSelector(booksSelector)
    
        const handlePageChange = (page) => {
            setCurrentPage(page - 1)
            fetchData(page - 1)
        }
    
        const fetchData = useCallback((page) => { dispatch(fetchBooks({ page, size: 5, sortBy: "title", })) }, [dispatch])
    
        useEffect(() => {
            fetchData(currentPage)
        }, [currentPage, fetchData])
    
        useEffect(() => {
            if (books?.page?.totalPages) {
                setTotalPages(books.page.totalPages)
            }
        }, [books])
        return (
            <div className="container p-4">
                <div data-aos="zoom-in-down" className="flex text-3xl justify-center p-4 underline decoration-primary">
                </div>
    
    
    
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    
                    {books?.content?.map((book) => <BookCard key={book.id} book={book} />)
                    }
                </div>
    
                <div className="flex justify-center mt-6 space-x-4">
                <div className="mt-12 flex justify-center">
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </div>
            
                </div>
            </div>
        );
      }