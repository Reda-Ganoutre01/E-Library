import { Route, Routes } from "react-router-dom";
import lazyComponent from "../utils/lazyComponent.js";

const AdminHomePage          = lazyComponent(() => import("../pages/admin/AdminHomePage.jsx"));
const AdminUsersPage         = lazyComponent(() => import("../pages/admin/users/AdminUsersPage.jsx"));
const AdminBooksPage         = lazyComponent(() => import("../pages/admin/books/AdminBooksPage.jsx"));
const AdminCreateBookPage    = lazyComponent(() => import("../pages/admin/books/AdminCreateBookPage.jsx"));
const AdminUpdateBookPage    = lazyComponent(() => import("../pages/admin/books/AdminUpdateBookPage.jsx"));
const AdminCreateUser        = lazyComponent(() => import("../pages/admin/users/AdminCreateUserPage.jsx"));
const AdminUpdateUserPage    = lazyComponent(() => import("../pages/admin/users/AdminUpdateUserPage.jsx"));
const AdminBorrowRecordsPage = lazyComponent(() => import("../pages/admin/borrowRecords/AdminBorrowRecordsPage.jsx"));

export default function AdminRoutes() {
  return (
    <Routes>
      <Route index element={<AdminHomePage />} />
      <Route path="users" element={<AdminUsersPage />} />
      <Route path="users/create" element={<AdminCreateUser />} />
      <Route path="users/update/:id" element={<AdminUpdateUserPage />}/>
      <Route path="books" element={<AdminBooksPage />} />
      <Route path="books/create" element={<AdminCreateBookPage />} />
      <Route path="books/update/:id" element={<AdminUpdateBookPage />} />
      <Route path="borrowRecords" element={<AdminBorrowRecordsPage/>}/>
    </Routes>
  );
}