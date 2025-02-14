import { lazy } from 'react';

const Auth=lazy(()=>import('../components/Auth_Forms/Register.jsx'));
export default function Register(){
  return (
    <>
      <Auth/>

    </>
  )
}
