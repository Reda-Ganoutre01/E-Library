import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import UserService from "../services/UserService.js";

// User pages
const Home = lazy(() => import("../pages/Home.jsx"));
const Login = lazy(() => import("../pages/Auth/LoginPage.jsx"))
const Register = lazy(() => import("../pages/Auth/RegisterPage.jsx"));
const Books = lazy(() => import("../pages/Books.jsx"));
const BookDetails = lazy(() => import("../pages/BookDetails.jsx"));
const Profile = lazy(() => import("../pages/UserProfile.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));
const Search = lazy(() => import("../pages/Search.jsx"));
const BorrowedRecord = lazy(() => import("../pages/BorrowRecord.jsx"));

// Admin pages
const AdminApp = lazy(() => import("../components/Admin/AppAdmin.jsx"));

const Dashboard = lazy(() => import("../pages/admin/Dashboard.jsx"));
const ManageUsers = lazy(() => import("../pages/admin/ManageUsers.jsx"));
const ManageBooks = lazy(() => import("../pages/admin/ManageBooks.jsx"));

// Components
const Loader = lazy(() => import("../components/Loader/Loader.jsx"));
const Nav = lazy(() => import("../components/Navbar/Navbar.jsx"));
const Footer = lazy(() => import("../components/Footer/Footer.jsx"));

const AppRoutes = () => {

  const isAuthenticated=UserService.isAuthanticate()
  const isAdmin=UserService.adminOnly()
  return (
    <Suspense fallback={<Loader />}>
      
       {/* Show Navbar only for users */}
       {!isAdmin && <Nav />}
      <Routes>
        {/* User Routes */}
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

      {!isAdmin && 
      <Footer />} 

        {/* {isAdmin &&
         <Routes>
          <Route path="/admin" element={<AdminApp />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/books" element={<ManageBooks />} />
        </Routes>
        } */}
       
      
    </Suspense>
  );
};

export default AppRoutes;
