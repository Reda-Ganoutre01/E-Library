import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import BookIcon from "@mui/icons-material/Book";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// * categories
import { categoriesList } from "../../constants/CategoriesConstant";
import logo from "../../assets/images/logo/logo_ALMS.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesList);
  }, []);

  return (
    <nav className="bg-white  p-4 shadow-md flex justify-between items-center w-full relative">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/home">
          <img src={logo} alt="Logo" className="w-14 md:w-18" />
        </Link>
      </div>

      {/* Search & Select Input */}
      <div className="hidden md:flex flex-grow mx-auto max-w-2xl">
        <div className="relative flex items-center w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <SearchIcon className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pl-10 outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 rounded-lg"
          />
          <select className="bg-gray-100 text-gray-700 border-l border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400">
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

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-800 focus:outline-none md:hidden"
        aria-label="Toggle Menu"
      >
        {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-8 text-lg text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-700 transition duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/books"
            className="hover:text-blue-700 transition duration-200"
          >
            Books
          </Link>
        </li>

        {/* Categories Dropdown */}
        <li className="relative">
          <button
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            className="flex items-center hover:text-blue-700 transition duration-200"
            aria-haspopup="true"
            aria-expanded={isCategoriesOpen}
          >
            Categories <ArrowDropDownIcon />
          </button>
          {isCategoriesOpen && (
            <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-48 py-2 z-50">
              {categories.map((categorie) => (
                <li className="px-4 py-2 hover:bg-gray-100" key={categorie.id}>
                  <Link to={`/categories/${categorie.name}`}>{categorie.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <Link
            to="/contact"
            className="hover:text-blue-700 transition duration-200"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <BookIcon className="cursor-pointer text-gray-600 hover:text-blue-600 transition duration-200" />
        </li>
        <li>
          <PersonIcon className="cursor-pointer text-gray-600 hover:text-blue-600 transition duration-200" />
        </li>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-b-md py-4 space-y-3 text-lg text-gray-700 md:hidden z-50">
          <li className="px-4 py-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block hover:text-blue-700 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link
              to="/books"
              onClick={() => setIsOpen(false)}
              className="block hover:text-blue-700 transition duration-200"
            >
              Books
            </Link>
          </li>

          {/* Categories Dropdown in Mobile */}
          <li className="px-4 py-2">
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center justify-between w-full text-left"
              aria-expanded={isCategoriesOpen}
            >
              Categories <ArrowDropDownIcon />
            </button>
            {isCategoriesOpen && (
              <ul className="mt-2 pl-4 space-y-1">
                {categories.map((categorie) => (
                  <li className="py-1" key={categorie.id}>
                    <Link to={`/categories/${categorie.name}`}>{categorie.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="px-4 py-2">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block hover:text-blue-700 transition duration-200"
            >
              Contact Us
            </Link>
          </li>
          <li className="px-4 py-2 flex items-center gap-2">
            <BookIcon className="text-gray-600" /> Books
          </li>
          <li className="px-4 py-2 flex items-center gap-2">
            <PersonIcon className="text-gray-600" /> Profile
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
