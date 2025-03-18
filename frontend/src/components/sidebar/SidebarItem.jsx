import { Link } from "react-router-dom";

export default function SidebarItem({ link, text , icon }) {
  return (
    <li className="flex flex-row gap-2">
      <Link className="text-md font-bold w-full" to={link}><span>{icon}</span>{text}</Link>
    </li>
  );
}
