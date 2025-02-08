import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import Home from "../pages/user/Home";
import BookList from "../pages/user/BookList";
import Profile from "../pages/user/Profile";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Routes Utilisateurs */}
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/profile" element={<Profile />} />

        {/* Routes Admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
