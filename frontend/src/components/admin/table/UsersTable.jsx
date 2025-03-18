import Table from "../../table/Table";
import headers from "../../../constants/headers.json";
import TableRow from "../../table/TableRow";
import TableColumn from "../../table/TableColumn";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import deleteUser from "../../../features/user/actions/deleteUser";
import fetchUsers from "../../../features/user/actions/fetchUsers";

export default function UsersTable({ users, loading }) {
  const dispatch = useDispatch();

  const handleDispatchDelete = useCallback((id) => {
      dispatch(deleteUser({ id: id })).then(() => {
        dispatch(fetchUsers());
      });
    },
    [dispatch]
  );

  const handleDelete = (id) => {
    const result = window.confirm(
      `Are you sure you want to delete user #${id}?`
    );
    if (result) {
      handleDispatchDelete(id);
      console.log("Dispatched CALLED !")
    }
  };

  return (
    <Table
      headers={headers.user.header}
      data={users}
      loading={loading}
      renderRow={(user) => (
        <TableRow className="text-center" key={user.id}>
          <TableColumn>{user.id}</TableColumn>
          <TableColumn>{user.username}</TableColumn>
          <TableColumn>{user.email}</TableColumn>
          <TableColumn>{user.fullName}</TableColumn>
          <TableColumn>{user.role}</TableColumn>
          <TableColumn>
            <button
              onClick={() => handleDelete(user.id)}
              className="btn btn-md btn-error"
            >
              Delete
            </button>
          </TableColumn>
          <TableColumn>
            <Link to={`update/${user.id}`} className="btn btn-md btn-accent">
              Show
            </Link>
          </TableColumn>
        </TableRow>
      )}
    />
  );
}
