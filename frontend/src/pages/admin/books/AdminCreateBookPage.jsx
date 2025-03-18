import { useState } from "react";
import BookForm from "../../../components/form/book/BookForm";
import PageNavigator from "../../../components/navigation/PageNavigator";
import { useDispatch, useSelector } from "react-redux";
import Page from "../../Page";
import createBook from "../../../features/book/actions/createBook";
import { useNavigate } from "react-router-dom";

/**
 * AdminCreateBookPage component allows administrators to create a new book entry in the E-Library system.
 *
 * It provides a form to input book details such as title, author, ISBN, copies, category, and description.
 * The form also allows uploading a file (such as a cover image) related to the book.
 *
 * On form submission, the component validates that all required fields are filled. If any field is missing,
 * an alert is shown to notify the user. Upon successful form submission, a `createBook` action is dispatched
 * to add the new book to the database, and the user is navigated to the book list page.
 *
 * - Updates the document title to "E-Library - Create Book".
 * - Displays a loading indicator if the book is being created.
 * - Handles form data submission, including the book details and optional file upload.
 * - Redirects to the `/admin/books` page once the book is successfully created.
 *
 * @returns {JSX.Element} The rendered AdminCreateBookPage component.
 */
export default function AdminCreateBookPage() {
  document.title = "E-Library - Create Book";
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loadingBook, errorBook } = useSelector((state) => state.books);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !data.title ||
      !data.author ||
      !data.isbn ||
      !data.copies ||
      !data.category
    ) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append(
      "bookRequestDto",
      JSON.stringify({
        title: data.title,
        author: data.author,
        description: data.description || "",
        isbn: data.isbn,
        copies: Number(data.copies),
        categoryId: Number(data.category),
      })
    );

    if (data.file) {
      formData.append("file", data.file);
    }

    dispatch(createBook(formData));

    if (!loadingBook && errorBook === null) {
      navigate("/admin/books");
    }
  };

  return (
    <Page>
      <PageNavigator title={"Create Book"} path={-1} />
      <BookForm
        data={data}
        setData={setData}
        loading={loadingBook}
        error={errorBook}
        onSubmit={handleSubmit}
      />
    </Page>
  );
}
