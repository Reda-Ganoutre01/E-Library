// import { lazy, Suspense } from "react"

import Navbar from "../components/Navbar/Navbar.jsx";
import { Hero } from "../components/Hero/Hero.jsx";
import Footer from "../components/Footer.jsx";
// const NavBar = lazy(() => import('../components/Navbar/Navbar.jsx'));
// const Section=lazy(()=>import('../components/Hero/Hero.jsx'));
// const Footer=lazy(()=>import('../components/Footer.jsx'));

const Home = () => {
  return (
    <>
            {/* Suspense to handle lazy-loaded component */}
            {/* <Suspense fallback={<div>Loading...</div>}>
            <NavBar/>
            <Section/>

            <Footer/>
            </Suspense> */}
       <Navbar/>
            <Hero/>
              <Footer/>
    </>
  )
}

export default Home
