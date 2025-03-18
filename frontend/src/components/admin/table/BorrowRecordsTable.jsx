import Table from "../../table/Table";
import headers from "../../../constants/headers.json";
import TableRow from "../../table/TableRow";
import TableColumn from "../../table/TableColumn";
import { Link } from "react-router-dom";


export default function BorrowRecordsTable({ borrowRecords, loading }) {
  return (
    <Table
      headers={headers.borrowRecords.header}
      data={borrowRecords}
      loading={loading}
      renderRow={(record) => (
        <TableRow className="text-center" key={record.id}>
          <TableColumn>{record.id}</TableColumn>
          <TableColumn>{record.userId}</TableColumn>
          <TableColumn>{record.bookId}</TableColumn>
          <TableColumn>
            {new Date(record.borrowDate).toLocaleDateString()}
          </TableColumn>
          <TableColumn>
            {record.returnDate
              ? new Date(record.returnDate).toLocaleDateString()
              : "Not returned"}
          </TableColumn>
          <TableColumn>{record.status}</TableColumn>
          
        </TableRow>
      )}
    />
  );
}
