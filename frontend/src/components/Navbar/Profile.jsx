import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import Avatar from "./Avatar.jsx";

export default function Profile() {
    const {user} = useContext(AuthContext)
    return <Link className="avatar avatar-placeholder" to={"/profile"}>
           <Avatar size={20} username={user.sub} textSize={'xl'} />
    </Link>
}