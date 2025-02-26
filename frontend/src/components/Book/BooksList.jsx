// import { useCallback, useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import fetchBooks from "../../features/book/actions/fetchBooks";
// import BookCard from "./BookCard";
// import { FaArrowLeft } from "react-icons/fa"
// import { useNavigate } from "react-router-dom";
// import Pagination from "../"


// export default function BooksList() {
//         const dispatch = useDispatch()
//         const [currentPage, setCurrentPage] = useState(0)
//         const [totalPages, setTotalPages] = useState(1)
//         const navigate = useNavigate()
    
//         const { books, loading, error } = useSelector((state) => state.books)
    
//         const handlePageChange = (page) => {
//             setCurrentPage(page - 1)
//             fetchData(page - 1)
//         }
    
//         const fetchData = useCallback((page) => { dispatch(fetchBooks({ page, size: 5, sortBy: "title", })) }, [dispatch])
    
//         useEffect(() => {
//             fetchData(currentPage)
//         }, [currentPage, fetchData])
    
//         useEffect(() => {
//             if (books?.page?.totalPages) {
//                 setTotalPages(books.page.totalPages)
//             }
//         }, [books])
//         return (
//             <div className="container">
//                 <div data-aos="zoom-in-down" className="flex text-3xl justify-center p-4 underline decoration-primary">
//                 </div>
    
    
    
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    
//                     {books?.content?.map((book) => <BookCard key={book.id} book={book} />)
//                     }
//                 </div>
    
//                 <div className="flex justify-center mt-6 space-x-4">
//                 <div className="mt-12 flex justify-center">
//                     <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
//                 </div>
//                     {/* <button
//                         onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
//                         disabled={currentPage === 0}
//                         className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//                     >
//                         Previous
//                     </button>
    
//                     <span className="px-4 py-2">
//                         Page {currentPage + 1} of {totalPages}
//                     </span>
    
//                     <button
//                         onClick={() => setCurrentPage((prev) => prev + 1)}
//                         disabled={currentPage >= totalPages - 1}
//                         className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//                     >
//                         Next
//                     </button> */}
//                 </div>
//             </div>
//         );
//     }
    