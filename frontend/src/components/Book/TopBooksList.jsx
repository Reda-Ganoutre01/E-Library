import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import fetchTopBooks from "../../features/book/actions/fetchTopBooks.js";

export default function TopBooksList() {

  const dispatch = useDispatch();
  const { topBooks , loadingTopBooks , errorTopBooks } = useSelector(state => state.books);
    useEffect(() => {
        dispatch(fetchTopBooks());
    }, [dispatch]);
  return (
    <div>
      <h2>Top Books</h2>
      <ul>

      </ul>
    </div>
  );
}
