import { lazy, Suspense } from "react"


const NavBar = lazy(() => import('../components/Navbar/Navbar.jsx'));
const Header=lazy(()=>import('../components/Header.jsx'));
const Books=lazy(()=>import('../components/Books.jsx'));
const Footer=lazy(()=>import('../components/Footer.jsx'));

const Home = () => {
  return (
    <>
            {/* Suspense to handle lazy-loaded component */}
            <Suspense fallback={<div>Loading...</div>}>
            <NavBar/>
      <Header/>
      <Books/>
      <Footer/>
      <Suspense/>
            </Suspense>
      
    </>
  )
}

export default Home
