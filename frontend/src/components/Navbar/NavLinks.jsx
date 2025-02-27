import { Menu } from "./Menu"
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from '@mui/icons-material/Book';
import UserService from "../../services/UserService";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchCategories from "../../features/category/actions/fetchCategories";

export default function NavLinks() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isAuthanticate = UserService.isAuthenticated()
  const [isSticky, setIsSticky] = useState(false);
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );
 

  useEffect(() => {
    dispatch(fetchCategories());
}, [dispatch]);

 
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
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

          <li className="group relative cursor-pointer">
            <Link to={"#"} className="flex items-center gap-2">
              Categories <FaCaretDown className="transition duration-300 group-hover:-rotate-180" />
            </Link>
            <div className="absolute left-0 z-10 hidden group-hover:block bg-white shadow-md p-2 rounded-md w-40">
              <ul>
                {
                  categories?.content?.map((category) => (
                    <li
                      key={category.id}
                      className="p-2 hover:text-primary rounded-md"
                    >
                      <Link to={`/books/${category.name}`}>{category.name}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </li>
        </ul>
        {isAuthanticate && <Link to={"/broowRecord"} onClick={() => setIsMobileMenuOpen(false)}>
          <BookIcon className="cursor-pointer text-gray-600 hover:text-blue-600 transition duration-200" />
        </Link>}
        {isAuthanticate && <Link to={"/profile"} onClick={() => setIsMobileMenuOpen(false)}>
          <PersonIcon className="cursor-pointer text-gray-600 hover:text-blue-600 transition duration-200" />
        </Link>}
        {!isAuthanticate && <Link to={"/login"} onClick={() => setIsMobileMenuOpen(false)}>
          <PersonIcon className="cursor-pointer text-gray-600 hover:text-blue-600 transition duration-200" />
        </Link>}
      </div>

      <button
        className="sm:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation"
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </>
  )
}