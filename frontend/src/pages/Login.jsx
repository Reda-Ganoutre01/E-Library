import { lazy } from "react"

const Auth=lazy(()=>import('../components/Auth_Forms/LoginForm.jsx'));


const Login = () => {
  return (
    <>
      <Auth/>
    </>
  )
}

export default Login
