import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUsers from "../../../features/user/actions/fetchUsers";
import PageNavigator from "../../../components/navigation/PageNavigator";
import Pagination from "../../../components/pagination/Pagination";
import UsersTable from "../../../components/admin/table/UsersTable";
import { Link } from "react-router-dom";
import Page from "../../Page";

export default function AdminUserPage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const { users, loading, error } = useSelector((state) => state.users);
  const handlePageChange = (page) => {
    setCurrentPage(page - 1);
    fetchData(page - 1);
  };
  const fetchData = useCallback(
    (page) => {
      dispatch(fetchUsers({ page, size: 5, sortBy: "username" }));
    },
    [dispatch]
  );
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, fetchData]);
  useEffect(() => {
    if (users?.page?.totalPages) {
      setTotalPages(users.page.totalPages);
    }
  }, [users]);
  return (
    <Page className="container flex flex-col px-12 mt-12">
      <PageNavigator title={"Users Manager"} path={-1} />
      <UsersTable users={users?.content} loading={loading} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <section className="mt-12 flex flex-row justify-end">
        <Link to={"/admin/users/create"} className="btn btn-sm btn-primary">
          Create User
        </Link>
      </section>
    </Page>
  );
}
