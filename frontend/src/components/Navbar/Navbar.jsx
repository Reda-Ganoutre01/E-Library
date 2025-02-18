import { useState, useEffect } from "react";
import { Link,  useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logo_ALMS.png";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CategoriesService from "../../services/CategoriesService";
import BookIcon from '@mui/icons-material/Book';
import UserService from "../../services/UserService";
const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Books", link: "/books" },
  { id: 4, name: "Contact", link: "/contact" }
];

export default function Navbar() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // for is Authenticated
  const isAuthanticate=UserService.isAuthanticate()

  // for Search
  const [search, setSearch] = useState("");

  const navigate = useNavigate(); // Use useNavigate hook

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      
      navigate(`/books/search=${search}`);
      setSearch("")
    }
  };

  useEffect(() => {
    // Fetch categories
    CategoriesService.getCategories()
      .then((response) => setCategoriesList(response.data.content));

    // Handle sticky navbar on scroll
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`shadow-lg bg-white w-full z-50 transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 shadow-md" : "relative"
      }`}
    >
      <div className="container flex justify-between items-center py-3 px-4 md:px-6 flex-wrap">
        {/* Logo */}
        <div>
          <Link
            to={"/"}
            className="flex items-center gap-2 font-bold text-2xl text-zinc-800 sm:text-3xl"
          >
            <img src={logo} className="w-10" alt="logo" />
            B-Library
          </Link>
        </div>

        {/* Search Box */}
        <div className="hidden md:flex flex-grow mx-4 lg:mx-20">
          <form onSubmit={handleSearch} className="relative flex items-center w-full max-w-md border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <SearchIcon className="absolute left-3 text-gray-500" />
            <input
              type="text"
              value={search}
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 pl-10 text-sm outline-none focus:ring-2 focus:ring-primary transition duration-200 rounded-lg"
            />
          </form>
        </div>
        {/* Desktop Navigation Menu */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className="flex items-center space-x-6">
            {Menu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className="py-2 hover:text-primary transition duration-200"
                >
                  {menu.name}
                </Link>
              </li>
            ))}

            {/* Categories Dropdown */}
            <li className="group relative cursor-pointer">
              <Link to={"#"} className="flex items-center gap-2">
                Categories <FaCaretDown className="transition duration-300 group-hover:-rotate-180" />
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-0 z-10 hidden group-hover:block bg-white shadow-md p-2 rounded-md w-40">
                <ul>
                  {categoriesList.length>0 ?(
                  categoriesList.map((category) => (
                    <li
                      key={category.id}
                      className="p-2 hover:text-primary rounded-md"
                    >
                    <Link to={`/books/categorie=${category.name}`}>{category.name}</Link>
                    </li>
                  ))):''
                }
                </ul>
              </div>
            </li>
          </ul>
              {/* Emprunt icon */}
             {isAuthanticate && <Link to={"/broowRecord"} onClick={() => setIsMobileMenuOpen(false)}>
            <BookIcon className="cursor-pointer text-gray-600 hover:text-blue-600 transition duration-200" />
          </Link>}
            {/* Emprunt icon */}
            {isAuthanticate && <Link to={"/profile"} onClick={() => setIsMobileMenuOpen(false)}>
            <PersonIcon className="cursor-pointer text-gray-600 hover:text-blue-600 transition duration-200" />
          </Link>}
          {/* Login Icon */}
          {!isAuthanticate && <Link to={"/login"} onClick={() => setIsMobileMenuOpen(false)}>
          <PersonIcon className="cursor-pointer text-gray-600 hover:text-blue-600 transition duration-200" />
          </Link>}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`sm:hidden bg-white transition-all duration-300 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {Menu.map((menu) => (
            <li key={menu.id}>
              <Link
                to={menu.link}
                className="py-2 block text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {menu.name}
              </Link>
            </li>
          ))}

          {/* Categories Dropdown */}
          <li className="relative group cursor-pointer">
            <button className="flex items-center gap-2">
              Categories <FaCaretDown />
            </button>
            <div className="absolute left-0 z-10 hidden group-hover:block bg-white shadow-md p-2 rounded-md w-40">
              <ul>
                {categoriesList.length>0 ?(
                categoriesList.map((category) => (
                  <li
                    key={category.id}
                    className="p-2 hover:bg-gray-200 rounded-md"
                  >
                    <Link
                      to={`/books/categorie=${category.name}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))):''}
              </ul>
            </div>
          </li>

                  {/* Emprunt icon */}
                  {isAuthanticate && <Link to={"/broowRecord"} onClick={() => setIsMobileMenuOpen(false)}>
            <BookIcon className="cursor-pointer text-gray-600 hover:text-blue-600 transition duration-200" />
          </Link>}
            {/* Emprunt icon */}
            {isAuthanticate && <Link to={"/profile"} onClick={() => setIsMobileMenuOpen(false)}>
            <PersonIcon className="cursor-pointer text-gray-600 hover:text-blue-600 transition duration-200" />
          </Link>}
         {/* Login Icon */}
         {!isAuthanticate && <Link to={"/login"} onClick={() => setIsMobileMenuOpen(false)}>
         <PersonIcon className="cursor-pointer text-gray-600 hover:text-blue-600 transition duration-200" />
         </Link>}
        </ul>
      </div>
    </nav>
  );
}
