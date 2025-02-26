import { useEffect, useState } from "react";
import bookService from "../services/bookService";
import { useParams } from "react-router-dom";
import BookDetailsComp from "../components/Book/BookDetailsComp";

export default function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    bookService.getBook(id)
      .then((response) => setBook(response.data))
      .catch((error) => console.error('Error fetching book data:', error));
  }, [id]);


  return (
  <>
  <BookDetailsComp id={id} book={book}/>
  </>
  );
}
