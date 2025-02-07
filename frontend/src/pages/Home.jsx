import { lazy } from "react"


const NavBar = lazy(() => import('../components/Navbar/Navbar.jsx'));
const Header=lazy(()=>import('../components/Header.jsx'));
const Home = () => {
  return (
    <>

      <NavBar/>
      <Header/>
    </>
  )
}

export default Home
