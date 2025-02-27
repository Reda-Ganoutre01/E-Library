import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Brand } from "./Brand";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks.JSX";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/books/${search}`);
      setSearch("");
    }
  };

  const [isSticky, setIsSticky] = useState(false);

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
    <nav
      className={`shadow-lg bg-white w-full z-50 transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 shadow-md" : "relative"
      }`}
    >
      <div className="container flex justify-between items-center py-3 px-4 md:px-6 flex-wrap">
        {/* Logo */}
        <Brand />
        {/* Search Box */}
        <SearchBar handleSearch={handleSearch} search={search} setSearch={setSearch} />
        {/* Desktop Navigation Menu */}
        <NavLinks />
      </div>
    </nav>
  );
}
