import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// User pages
const Home = lazy(() => import("../pages/Home.jsx"));
const Login = lazy(() => import("../pages/Auth/LoginPage.jsx"))
const Register = lazy(() => import("../pages/Auth/RegisterPage.jsx"));
const Books = lazy(() => import("../pages/Books.jsx"));
const BookDetails = lazy(() => import("../pages/BookDetails.jsx"));
const Profile = lazy(() => import("../pages/UserProfile.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));
const Search = lazy(() => import("../pages/Search.jsx"));

// Admin pages
const Dashboard = lazy(() => import("../pages/admin/Dashboard.jsx"));
const ManageUsers = lazy(() => import("../pages/admin/ManageUsers.jsx"));
const ManageBooks = lazy(() => import("../pages/admin/ManageBooks.jsx"));

// Components
const Loader = lazy(() => import("../components/Loader/Loader.jsx"));
const Nav = lazy(() => import("../components/Navbar/Navbar.jsx"));
const Footer = lazy(() => import("../components/Footer/Footer.jsx"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Nav />
      <Routes>
        {/* Routes Utilisateurs */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:search" element={<Search />} />
        <Route path="/books/:categorie" element={<Search />} />
        <Route path="/books/bookdetails/:id" element={<BookDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />

        {/* Routes Admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/books" element={<ManageBooks />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default AppRoutes;
