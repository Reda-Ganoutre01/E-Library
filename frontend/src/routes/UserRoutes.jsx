import { Route, Routes } from "react-router-dom";

import lazyComponent from "../utils/lazyComponent.js";
import ProtectedRoute from "../utils/ProtectedRoute.jsx";

const HomePage = lazyComponent(() => import("../pages/user/HomePage.jsx"));
const BooksPage = lazyComponent(() => import("../pages/user/BooksPage.jsx"));
const LoginPage = lazyComponent(() => import("../pages/auth/LoginPage.jsx"));
const RegisterPage = lazyComponent(() =>
  import("../pages/auth/RegisterPage.jsx")
);
const ContactPage = lazyComponent(() =>
  import("../pages/user/ContactPage.jsx")
);
const BookPage = lazyComponent(() => import("../pages/user/BookPage.jsx"));
const ProfilePage = lazyComponent(() =>
  import("../pages/user/ProfilePage.jsx")
);
const BorrowPage = lazyComponent(() => import("../pages/user/BorrowPage.jsx"));

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/books/:id" element={<BookPage />} />
      <Route path="/profile" element={<ProfilePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/borrow/:id" element={<BorrowPage />} />
      </Route>
    </Routes>
  );
}
