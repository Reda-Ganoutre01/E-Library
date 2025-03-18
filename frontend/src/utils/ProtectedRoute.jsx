import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.jsx";
import {Navigate, Outlet} from "react-router-dom";

export default function ProtectedRoute() {
    const {isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />;
}