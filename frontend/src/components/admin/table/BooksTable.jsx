import Table from "../../table/Table";
import headers from "../../../constants/headers.json";
import TableRow from "../../table/TableRow";
import TableColumn from "../../table/TableColumn";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import deleteBook from "../../../features/book/actions/deleteBook";
import fetchBooks from "../../../features/book/actions/fetchBooks";

export default function BooksTable({ books, loading }) {
  const dispatch = useDispatch();

  const handleDispatchDelete = useCallback(
    (id) => {
      dispatch(deleteBook({ id : id })).then(() => {
        dispatch(fetchBooks());
      });
    },
    [dispatch]
  );

  const handleDelete = (id) => {
    const result = window.confirm(
      `Are you sure you want to delete this book #${id}?`
    );
    if (result) {
      handleDispatchDelete(id);
    }
  };

  return (
    <Table
      headers={headers.book.header}
      data={books}
      loading={loading}
      renderRow={(book) => (
        <TableRow className="text-center" key={book.id}>
          <TableColumn>{book.id}</TableColumn>
          <TableColumn>{book.title}</TableColumn>
          <TableColumn>{book.author}</TableColumn>
          <TableColumn>{book.isbn}</TableColumn>
          <TableColumn>{book.category}</TableColumn>
          <TableColumn>{book.copies}</TableColumn>
          <TableColumn>
            <button
              onClick={() => handleDelete(book.id)}
              className="btn btn-md btn-error"
            >
              Delete
            </button>
          </TableColumn>
          <TableColumn>
            <Link to={`update/${book.id}`} className="btn btn-md btn-accent">
              Show
            </Link>
          </TableColumn>
        </TableRow>
      )}
    />
  );
}
