  import { Routes, Route } from "react-router-dom";
  import { lazy } from "react";

  // User pages
  const Home = lazy(() => import("../pages/Home.jsx"));
  const Login = lazy(() => import("../components/Auth/LoginForm.jsx"));
  const Register = lazy(() => import("../components/Auth/RegisterForm.jsx"));
  const Books = lazy(() => import("../pages/Books.jsx"));
  const BookDetails = lazy(() => import("../pages/BookDetails.jsx"));
  const Profile = lazy(() => import("../pages/UserProfile.jsx"));
  const Contact = lazy(() => import("../pages/Contact.jsx"));
  const Search = lazy(() => import("../pages/Search.jsx"));
  const BorrowedRecord = lazy(() => import("../pages/BorrowRecord.jsx"));


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
      {isAuthenticated && <Route path="/profile" element={<Profile />} />}
    </Routes>
  );

  export default UserRoutes;
