import { NavbarMenu } from "../../mockdata/data"
import { CiSearch } from "react-icons/ci"
import { FaDumbbell } from "react-icons/fa"
import { MdMenu } from "react-icons/md"
import { PiShoppingCartThin } from "react-icons/pi"
export const Navbar = () => {
  return (
    <>
     <nav>
        <div className="container"
        >
            {/* logo */}
            <div className="text-2xl flex item-center gap-2 font-bold py-8">
                <FaDumbbell />
                <p>Coders</p>
                <p className="text-secondary">Gym</p>
            </div>
            {/* Menu */}
            {/* Icons */}

            {/* Mobile */}

        </div>
    </nav>
    </>
   
  )
}
