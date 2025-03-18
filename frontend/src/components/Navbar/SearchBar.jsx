import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import Input from "../form/components/Input";
import { Link } from "react-router-dom";
import fetchBooksBySearch from "../../features/book/actions/fetchBooksBySearch";

export default function SearchBar() {
  const { searchedBooks, loadingSearchedBooks, errorSearchedBooks } =
    useSelector((state) => state.books);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  // Fetch books by search term whenever the search term changes
  useEffect(() => {
    if (search !== "") {
      dispatch(fetchBooksBySearch({ search }));
    }
  }, [search, dispatch]);

  // Clear the search input and close the dropdown when a link is clicked
  const handleLinkClick = () => {
    setSearch(""); // Clear the search input
  };

  return (
    <div className="flex-1 relative">
      {/* Search Input */}
      <Input
        id="searchedBooks"
        icon={<FaSearch className="size-4" />}
        type="search"
        name="searchedBooks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="grow"
        placeHolder="Book, Author, or Category"
        required={false}
      />
      {search !== "" && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 shadow-lg rounded-md mt-1 z-10">
          {loadingSearchedBooks ? (
            <div className="p-2 text-center text-gray-500">Loading...</div>
          ) : errorSearchedBooks ? (
            <div className="p-2 text-center text-red-500">Error: {errorSearchedBooks}</div>
          ) : searchedBooks.length > 0 ? (
            <ul className="max-h-60 overflow-y-auto">
              {searchedBooks.map((book) => (
                <li key={book.id} className="hover:bg-gray-100">
                  <Link
                    to={`/books/${book.id}`}
                    className="block p-2 text-gray-700 hover:text-blue-600"
                    onClick={handleLinkClick}
                  >
                    {book.title} by {book.author}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-2 text-center text-gray-500">No results found.</div>
          )}
        </div>
      )}
    </div>
  );
}