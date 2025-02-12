import { lazy } from "react"

const Auth=lazy(()=>import('./../components/Auth_Forms/AuthForm.jsx'));
const Nav=lazy(()=>import('./../components/Navbar/Navbar.jsx'));
const Footer=lazy(()=>import('./../components/Footer.jsx'));
export const Register = () => {
  return (
    <>
      <Nav/>
      <Auth/>
      <Footer/>
    </>
 
  )
}
