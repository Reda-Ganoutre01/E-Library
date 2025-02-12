import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Loader=lazy(()=>import("../components/Loader.jsx"))

// user
const Home=lazy(()=>import("../pages/Home.jsx"));
const Login=lazy(()=>import("../pages/Login.jsx"));
const Register=lazy(()=>import("../pages/Register.jsx"));
const Books=lazy(()=>import("../pages/Books.jsx"));
const BookDetail=lazy(()=>import("../pages/BookDetails.jsx"));
// admin
const Dashboard=lazy(()=>import("../pages/admin/Dashboard.jsx"));
const ManageUsers=lazy(()=>import("../pages/admin/ManageUsers.jsx"))
import Profile from "../pages/Profile.jsx"

const AppRoutes = () => {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    const timer=setTimeout(()=>setLoading(false),1000);
    return ()=> clearTimeout(timer);
  },[]);
  return (
    <Router>
      {loading ? (
        <Loader/>
      ):
      (
        <Suspense fallback={<Loader />}>

         <Routes>
        {/* Routes Utilisateurs */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/profile" element={<Profile />} />



        {/* Routes Admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
      </Routes>
      </Suspense>
      )
    }
      
     
    </Router>
  );
};

export default AppRoutes;
