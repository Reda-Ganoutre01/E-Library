import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo_ALMS.png";
import { categoriesList } from "../../constants/CategoriesConstant";
import { FaCaretDown } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

const Menu = [
  { id: 1, name: "Home", link: "/home" },
  { id: 2, name: "News", link: "/News" },
  { id: 4, name: "Contact", link: "/Contact" }
];

const Navbar = () => {
  return (
    <div className="shadow-lg">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to={"/home"} className="font-bold text-2xl text-zinc-800 sm:text-3xl flex gap-2">
              <img src={logo} className="w-10" alt="logo" />
              B-Library
            </Link>
          </div>

          {/* Search Box Centered and Smaller */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="relative flex items-center w-full max-w-md border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <SearchIcon className="absolute left-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 pl-10 text-sm outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 rounded-lg"
              />
              <select className="bg-gray-100 text-gray-700 border-l border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400">
                <option disabled selected>
                  Search by
                </option>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="category">Category</option>
                <option value="availability">Availability</option>
              </select>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center gap-4">
            <ul className="items-center hidden sm:flex">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <Link to={menu.link} className="inline-block py-4 px-4 hover:text-primary duration-200">
                    {menu.name}
                  </Link>
                </li>
              ))}

              {/* Categories Dropdown */}
              <li className="group relative cursor-pointer">
                <Link to={"#"} className="flex h-[72px] items-center gap-2">
                  Categories <FaCaretDown className="transition duration-300 group-hover:-rotate-180" />
                </Link>

                {/* Dropdown Menu */}
                <div className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px]">
                  <ul>
                    {categoriesList.map((categorie) => (
                      <li key={categorie.id} className="w-full rounded-md p-2 hover:bg-primary">
                        <Link to={`/${categorie.name}`}>{categorie.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            {/* Login Icon */}
            <Link to={"/login"}>
              <PersonIcon className="cursor-pointer text-gray-600 hover:text-blue-600 transition duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
