import TableRow from "./TableRow";
import TableColumn from "./TableColumn";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Loader from "../loader/Loader";

export default function Table({ headers, data, renderRow, loading }) {
  return (
    <table
      className={`table table-md w-full font-[poppins] border-[0.3px] rounded-md border-[#ccc] mb-6 bg-base-100`}
    >
      <TableHeader>
        <TableRow className={"text-center"}>
          {headers.map((header, index) => (
            <TableColumn key={index}>{header}</TableColumn>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          <td className="text-center mx-auto">
            <Loader />
          </td>
        ) : (
          data?.map(renderRow)
        )}
      </TableBody>
    </table>
  );
}
