import { Link, useNavigate } from "react-router-dom";
import { FaBook, FaSignInAlt } from "react-icons/fa";
import { MdAdminPanelSettings, MdContactSupport } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import fetchCategories from "../../features/category/actions/fetchCategories.js";
import { AuthContext } from "../../context/AuthContext.jsx";
import { logout } from "../../features/auth/AuthReducer.js";
import NavLink from "./NavLink.jsx";


export default function NavLinks() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
    navigate("/");
  };

  return (
    <ul className="menu menu-horizontal px-1 gap-2">
      <NavLink>
        <Link to={"/books"}>
          <FaBook className={"size-5"} />
          <span>Books</span>
        </Link>
      </NavLink>
      <NavLink>
        <Link to={"/contact"}>
          <MdContactSupport className={"size-5"} />
          <span>Contact</span>
        </Link>
      </NavLink>
      {user?.role === "LIBRARIAN" ? (
        <NavLink className="flex flex-row items-center">
          <Link to="/admin">
            <MdAdminPanelSettings className={"size-6"} />
            <span>Admin</span>
          </Link>
        </NavLink>
      ) : null}
      <NavLink>
        <details>
          <summary>
            <FaTag className={"size-5"} />
            <span>Categories</span>
          </summary>
          <ul className="rounded-t-none p-2 z-[2]">
            {categories?.content?.map((category) => {
              return (
                <li key={category.id}>
                  <Link to={`/booksbycategory/${category.name}`}> <span>{category.name}</span></Link>
                 
                </li>
              );
            })}
          </ul>
        </details>
      </NavLink>
      {!isAuthenticated ? (
        <Link to={"/login"} className={"btn btn-sm btn-primary"} id="btn-login">
          <FaSignInAlt />
          <span>Sign in</span>
        </Link>
      ) : (
        <button
          onClick={handleLogout}
          className={"btn btn-sm bg-error border-none font-bold text-white"}
          id="btn-logout"
        >
          Sign out
        </button>
      )}
    </ul>
  );
}
