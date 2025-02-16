import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo_ALMS.png";
import { useEffect, useState } from "react";
import CategoriesService from "../../services/CategoriesService";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons

function Footer() {
  const [categoriesList, setCategoriesList] = useState([]);
  const Menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Books", link: "/Books" },
    { id: 4, name: "Contact", link: "/contact" },
    { id: 5, name: "Profile", link: "/profile" },
  ];

  useEffect(() => {
    CategoriesService.getCategories().then((response) => setCategoriesList(response.data.content));
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Services */}
          <aside>
            <div>
              <Link to={"/home"} className="font-bold text-2xl text-white sm:text-3xl flex gap-2">
                <img src={logo} className="w-10" alt="logo" />
                B-Library
              </Link>
            </div>
            <p className="my-5">
              The Advanced Library Management System is a web application that
              <br />
              provides functionalities for both library users and librarians.
            </p>
          </aside>

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

          {/* Company */}
          <nav>
            <h6 className="text-lg font-semibold text-white mb-4">Categories</h6>
            <ul className="space-y-3">
              {categoriesList.map((e) => (
                <li key={e.id}>
                  <Link 
                  to={`/books/categorie=${e.name}`}
                  className="link link-hover cursor-pointer text-gray-400 hover:text-white transition duration-200">
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav>
            <h6 className="text-lg font-semibold text-white mb-4">Follow Us</h6>
            <ul className="flex space-x-6">
              <li>
                <a
                  className="text-gray-400 hover:text-white transition duration-200"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition duration-200"
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition duration-200"
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition duration-200"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; 2025 Reda Ganoutre & Mohamed Lafrouh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
