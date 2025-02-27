import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchBook from "../features/book/actions/fetchBook";
import BookDetails from "../components/Book/BookDetails";

export default function BookPage() {
 
  const dispatch = useDispatch();
  const { book } = useSelector((state) => state.books);
  const {id}     = useParams();
  useEffect(() => {
      dispatch(fetchBook({id : id}));
  } , [dispatch]);

  return (
  <>
  <BookDetails id={id} book={book}/>
  </>
  );
}
