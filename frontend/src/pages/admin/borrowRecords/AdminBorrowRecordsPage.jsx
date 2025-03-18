import { useState, useEffect , useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageNavigator from "../../../components/navigation/PageNavigator";
import Page from "../../Page";
import BorrowRecordsTable from "../../../components/admin/table/BorrowRecordsTable";
import fetchBorrowRecords from "../../../features/borrowRecord/actions/fetchBorrowRecords";
import Pagination from "../../../components/pagination/Pagination";


export default function AdminBorrowRecordsPage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const { records, loading, error } = useSelector((state) => state.borrowRecords);
  const fetchData = useCallback(
    (page) => {
      dispatch(fetchBorrowRecords({ page, size: 5, sortBy: "borrowDate" }));
    },
    [dispatch]
  );
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, fetchData]);
  
  useEffect(() => {
    if (records?.page?.totalPages) {
      setTotalPages(records.page.totalPages);
    }
  }, [records]);

  const handlePageChange = (page) => {
    setCurrentPage(page - 1);
    fetchData(page - 1);
  };

  return (
    <Page className="container flex flex-col px-12 mt-12">
      <PageNavigator title={"Borrow Records Manager"} path={-1} />
      <BorrowRecordsTable borrowRecords={records?.content} loading={loading} error={error} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Page>
  );
}