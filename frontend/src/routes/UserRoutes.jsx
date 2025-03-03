  import { Routes, Route } from "react-router-dom";
  import { lazy } from "react";

  // User pages
  const Home = lazy(() => import("../pages/HomePage.jsx"));
  const Login = lazy(() => import("../pages/LoginPage.jsx"));
  const Register = lazy(() => import("../pages/RegisterPage.jsx"));
  const Books = lazy(() => import("../pages/BooksPage.jsx"));
  const BookDetails = lazy(() => import("../pages/BookPage.jsx"));
  const Profile = lazy(() => import("../pages/UserProfilePage.jsx"));
  const Contact = lazy(() => import("../pages/ContactPage.jsx"));
  const Search = lazy(() => import("../pages/SearchPage.jsx"));
  const BorrowedRecord = lazy(() => import("../pages/BorrowRecordPage.jsx"));


  const UserRoutes = ({ isAuthenticated }) => (
    <Routes>
      <Route path="/" element={<Home />} />
      {!isAuthenticated && <Route path="/login" element={<Login />} />}
      {!isAuthenticated && <Route path="/register" element={<Register />} />}
      <Route path="/books" element={<Books />} />
      {isAuthenticated && <Route path="/borrowRecord" element={<BorrowedRecord />} />}
      <Route path="/books/:search" element={<Search />} />
      <Route path="/books/:category" element={<Search />} />
      <Route path="/books/bookdetails/:id" element={<BookDetails />} />
      <Route path="/contact" element={<Contact />} />
      {/* {isAuthenticated && <Route path="/profile" element={<Profile />} />} */}
      { <Route path="/profile" element={<Profile />} />}

    </Routes>
  );

  export default UserRoutes;
