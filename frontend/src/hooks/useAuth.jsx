import {AuthContext} from "../context/AuthContext.jsx";
import {useContext} from "react";

export default function useAuth() {
    return useContext(AuthContext);
}