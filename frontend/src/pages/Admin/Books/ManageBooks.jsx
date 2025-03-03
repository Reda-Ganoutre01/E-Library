import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../components/pagination/Pagination";
import { useNavigate } from "react-router-dom";
import fetchBooks from "../../../features/book/actions/fetchBooks";
import { THead } from "../../../components/Table/THead";
import { TBody } from "../../../components/Table/TBody";

export default function ManageBooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const columns = ["id", "title", "cover", "author", "isbn", "category", "copies", "description"];
  const { books, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page - 1);
    fetchData(page - 1);
  };

  const fetchData = useCallback(
    (page) => {
      dispatch(fetchBooks({ page, size: 5, sortBy: "id" }));
    },
    [dispatch]
  );

  useEffect(() => {
    if (books?.page?.totalPages) {
      setTotalPages(books.page.totalPages);
    }
  }, [books]);

  const handleUpdate = (id) => {
    console.log("Edit book with ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete book with ID:", id);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Manage Books</h1>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            onClick={() => navigate("/admin/books/add")}
          >
            + Add New Book
          </button>
        </div>

        {/* Books Table */}
        <div className="overflow-x-auto bg-white shadow-xl rounded-lg">
          <table className="min-w-full table-auto border-collapse text-sm">
            <THead columns={columns} />
            <TBody data={books?.content || []} columns={columns} editLine={handleUpdate} dropLine={handleDelete} />
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
}
