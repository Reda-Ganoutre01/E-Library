import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import UserService from "../services/UserService.js";

// User pages
const Home = lazy(() => import("../pages/Home.jsx"));
const Login = lazy(() => import("../pages/Auth/LoginPage.jsx"));
const Register = lazy(() => import("../pages/Auth/RegisterPage.jsx"));
const Books = lazy(() => import("../pages/Books.jsx"));
const BookDetails = lazy(() => import("../pages/BookDetails.jsx"));
const Profile = lazy(() => import("../pages/UserProfile.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));
const Search = lazy(() => import("../pages/Search.jsx"));
const BorrowedRecord = lazy(() => import("../pages/BorrowRecord.jsx"));
const NotFound = lazy(() => import("../pages/NotFound.jsx")); // 404 Page

// Admin pages
const AdminProfile = lazy(() => import("../components/Admin/Profile/AdminProfile.jsx"));

const Slidebar = lazy(() => import("../components/Admin/Slidebar.jsx"));
const Main = lazy(() => import("../components/Admin/Main.jsx"));
const Dashboardview = lazy(() => import("../components/Admin/Dahboardview.jsx"));
const ManageUsers = lazy(() => import("../components/Admin/Users/ManageUsers.jsx"));
const ManageBooks = lazy(() => import("../components/Admin/Books/ManageBooks.jsx"));
const ManageBrrowRecord = lazy(() => import("../components/Admin/BrrowRecord/ManageBrrowRecord.jsx"));

const ManageCategory = lazy(() => import("../components/Admin/Categoryes/ManageCategoryes.jsx"));
const ManageMessage = lazy(() => import("../components/Admin/Messages/ManageMessage.jsx"));

// Components
const Loader = lazy(() => import("../components/Loader/Loader.jsx"));
const Nav = lazy(() => import("../components/Navbar/Navbar.jsx"));
const Footer = lazy(() => import("../components/Footer/Footer.jsx"));

const AppRoutes = () => {
  const isAuthenticated = UserService.isAuthanticate();
  const isAdmin = UserService.adminOnly();

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

        {/* Admin Routes */}
        {isAdmin && (
          <Route path="/admin/*" element={
            <div className="flex">
              <div className="basis-[12%] h-[100vh] border">
                <Slidebar />
              </div>
              <div className="basis-[88%] border">
                <Dashboardview/>
                <Routes>
                  <Route path="" element={<Main />} />
                  <Route path="users" element={<ManageUsers />} />
                  <Route path="books" element={<ManageBooks />} />
                  <Route path="brrowrecord" element={<ManageBrrowRecord />} />
                  <Route path="categorys" element={<ManageCategory />} />
                  <Route path="message" element={<ManageMessage />} />
                  <Route path="profile" element={<AdminProfile />} />

                </Routes>
              </div>
            </div>
          } />
        )}

        {/* Catch-all 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isAdmin && <Footer />}
    </Suspense>
  );
};

export default AppRoutes;
