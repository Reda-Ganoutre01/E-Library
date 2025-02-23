import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import UserService from "../services/UserService.js";

const UserRoutes = lazy(() => import("./UserRoutes.jsx"));
const AdminRoutes = lazy(() => import("./AdminRoutes.jsx"));
const Loader = lazy(() => import("../components/Loader/Loader.jsx"));
const Footer = lazy(() => import("../components/Footer/Footer.jsx"));
const Navbar = lazy(() => import("../components/Navbar/Navbar.jsx"));
const NotFound = lazy(() => import("../pages/NotFound.jsx"));

const AppRoutes = () => {
  const isAuthenticated = UserService.isAuthenticated();
  const isAdmin = UserService.adminOnly();

  return (
    <Suspense fallback={<Loader />}>
      {!isAdmin && <Navbar />}

      <Routes>
        <Route path="/*" element={<UserRoutes isAuthenticated={isAuthenticated} />} />
        {isAdmin && <Route path="/admin/*" element={<AdminRoutes isAdmin={isAdmin} />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isAdmin && <Footer />}
    </Suspense>
  );
};

export default AppRoutes;
