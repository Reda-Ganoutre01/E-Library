import Brand     from "./Brand.jsx"
import NavLinks  from "./NavLinks.jsx"
import SearchBar from "./SearchBar.jsx"
import Profile  from "./Profile.jsx"
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

export default function Navbar() {
    const {isAuthenticated} = useContext(AuthContext)
    return <nav className={'navbar bg-base-100 shadow-sm flex gap-8 font-[montserrat] px-44 py-2 font-bold'}>
        <Brand title={"E-Library"} />
        <SearchBar/>
        <NavLinks/>
        {!isAuthenticated ? null : <Profile/>}
    </nav>
}