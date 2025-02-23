// AdminRoutes.jsx
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const AdminProfile = lazy(() => import("../components/Admin/Profile/AdminProfile.jsx"));
const Slidebar = lazy(() => import("../components/Admin/Slidebar.jsx"));
const Main = lazy(() => import("../components/Admin/Main.jsx"));
const Dashboardview = lazy(() => import("../components/Admin/Dahboardview.jsx"));
const ManageUsers = lazy(() => import("../components/Admin/Users/ManageUsers.jsx"));
const ManageBooks = lazy(() => import("../components/Admin/Books/ManageBooks.jsx"));
const ManageBrrowRecord = lazy(() => import("../components/Admin/BrrowRecord/ManageBrrowRecord.jsx"));
const ManageCategory = lazy(() => import("../components/Admin/Categoryes/ManageCategoryes.jsx"));
const ManageMessage = lazy(() => import("../components/Admin/Messages/ManageMessage.jsx"));

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
