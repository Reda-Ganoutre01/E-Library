import { lazy } from "react"

const Auth=lazy(()=>import('./../components/Auth_Forms/AuthForm.jsx'));
const Nav=lazy(()=>import('./../components/Navbar/Navbar.jsx'));
const Footer=lazy(()=>import('./../components/Footer.jsx'));

const Login = () => {
  return (
    <>
      <Nav/>
      <Auth/>
      <Footer/>
    </>
  )
}

export default Login
