export default function TableColumn({ children, className , colSpan=null }) {
  return <td className={className} colSpan={colSpan}>{children}</td>;
}
