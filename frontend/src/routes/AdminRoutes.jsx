// AdminRoutes.jsx
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const AdminProfile = lazy(() => import("../pages/Admin/Profile/AdminProfile.jsx"));

const Slidebar = lazy(() => import("../pages/Admin/Slidebar.jsx"));
const Main = lazy(() => import("../pages/Admin/Main.jsx"));
const Dashboardview = lazy(() => import("../pages/Admin/Dahboardview.jsx"));
const ManageUsers = lazy(() => import("../pages/Admin/Users/ManageUsers.jsx"));
const ManageBooks = lazy(() => import("../pages/Admin/Books/ManageBooks.jsx"));
const ManageBrrowRecord = lazy(() => import("../pages/Admin/BrrowRecord/ManageBrrowRecord.jsx"));
const ManageCategory = lazy(() => import("../pages/Admin/Categoryes/ManageCategoryes.jsx"));
const ManageMessage = lazy(() => import("../pages/Admin/Messages/ManageMessage.jsx"));

const AdminRoutes = () => {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh] border">
        <Slidebar />
      </div>
      <div className="basis-[88%] border">
        <Dashboardview />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="books" element={<ManageBooks />} />
          <Route path="brrowrecord" element={<ManageBrrowRecord />} />
          <Route path="categorys" element={<ManageCategory />} />
          <Route path="message" element={<ManageMessage />} />
          <Route path="profile" element={<AdminProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoutes;
