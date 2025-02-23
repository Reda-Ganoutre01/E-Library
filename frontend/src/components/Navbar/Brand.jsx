import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo_ALMS.png";

export const Brand = () => {
  return (
    <>
<div>
          <Link
            to={"/"}
            className="flex items-center gap-2 font-bold text-2xl text-zinc-800 sm:text-3xl"
          >
            <img src={logo} className="w-10" alt="logo" />
            B-Library
          </Link>
        </div>

    </>
  )
}
