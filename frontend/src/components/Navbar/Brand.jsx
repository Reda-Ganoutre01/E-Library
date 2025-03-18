import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Brand({title}) {
    return <div className="">
        <Link to={"/"} className="flex items-center text-2xl gap-2">
            <img src={logo} className="size-12" alt="a smiling book" />
            <span>{title}</span>
        </Link>
    </div>
}