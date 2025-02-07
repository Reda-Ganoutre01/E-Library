import { Link } from "react-router-dom";
import { useState} from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from '@mui/icons-material/Search';
import BookIcon from '@mui/icons-material/Book';
import "../../styles/Navbar.css";
// const image=lazy(()=>import('./logo/book.png'))
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      {/* <img src={image} alt="image1" /> */}
      <div className="logo">
        Books <span>Library</span>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div style={{ transform: menuOpen ? "rotate(45deg)" : "rotate(0)" }}></div>
        <div style={{ opacity: menuOpen ? "0" : "1" }}></div>
        <div style={{ transform: menuOpen ? "rotate(-45deg)" : "rotate(0)" }}></div>
      </div>

      <ul className={`links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      <div className="icons">
        <SearchIcon id="icon" />
        <FavoriteIcon id="icon" />
        <BookIcon id="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
