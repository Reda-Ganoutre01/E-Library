import { Link } from "react-router-dom";
import UserService from "../../services/UserService"; 

export const ServiceFooter = () => {
  const isAuthenticated = UserService.isAuthenticated(); 

  const Menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Books", link: "/Books" },
    { id: 4, name: "Contact", link: "/contact" },


  ];

  if (!isAuthenticated) {
    Menu.push({ id: 5, name: "Login", link: "/login" });
    Menu.push({ id: 6, name: "Register", link: "/register" });
  } else {
    Menu.push({ id: 7, name: "Profile", link: "/profile" });
    Menu.push({ id: 8, name: "BorrowRecord", link: "/broowRecord" });
  }

  return (
    <nav>
      <h6 className="text-lg font-semibold text-white mb-4">Services</h6>
      <ul className="space-y-3">
        {Menu.map((e) => (
          <li key={e.id}>
            <Link
              className="link link-hover cursor-pointer text-gray-400 hover:text-white transition duration-200"
              to={e.link}
            >
              {e.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
