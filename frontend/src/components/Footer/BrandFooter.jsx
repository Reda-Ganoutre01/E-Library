import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_ALMS.png";
export default function BrandFooter() {
    return (
        <>
            <aside>
                <div>
                    <Link to={"/home"} className="font-bold text-2xl text-white sm:text-3xl flex gap-2">
                        <img src={logo} className="w-10" alt="logo" />
                        B-Library
                    </Link>
                </div>
                <p className="my-5">
                    The Advanced Library Management System is a web application that
                    <br />
                    provides functionalities for both library users and librarians.
                </p>
            </aside>
        </>
    )
}
