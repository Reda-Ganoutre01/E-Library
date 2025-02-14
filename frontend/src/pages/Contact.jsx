import React, { lazy } from 'react'
const ContactForm=lazy(()=>import("../components/Contact/ContactForm.jsx"))
export default function Contact (){
  return (
    <>
    <ContactForm/>
    </>
  )
}
