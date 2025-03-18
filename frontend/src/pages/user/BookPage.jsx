import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchBook from "../../features/book/actions/fetchBook.js";
import { useParams } from "react-router-dom";
import PageNavigator from "../../components/navigation/PageNavigator.jsx";
import BookDetails from "../../components/book/BookDetails.jsx";

/**
 * BookPage Component
 *
 * This component displays detailed information about a specific book in the E-Library.
 * It retrieves the book data based on the ID from the URL parameters and updates
 * the document title dynamically.
 *
 * Features:
 * - Fetches book details from the Redux store.
 * - Uses `useParams` to get the book ID from the URL.
 * - Dispatches an action to fetch the book details on component mount.
 * - Displays a navigational component and the book details.
 *
 * @returns {JSX.Element} The rendered book details page.
 */
export default function BookPage() {
  const dispatch = useDispatch();
  const { book } = useSelector((state) => state.books);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchBook({ id: id }));
  }, [dispatch , id]);

  document.title = `E-Library - ${book.title}`;

  return (
    <section className={"container flex flex-col px-12 mt-12"}>
      <PageNavigator title={"Book View"} path={-1} />
      <BookDetails book={book} />
    </section>
  );
}
