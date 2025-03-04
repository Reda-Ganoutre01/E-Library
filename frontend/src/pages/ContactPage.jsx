import { useState } from 'react'
import ContactForm from '../components/Contact/ContactForm'
import Modal from '../components/Modal/Modal'

export default function ContactPage() {
  const [showModal,setShowModal]=useState(false)
  return (
    <>
    <ContactForm/>
    <button className='bg-primary p-4' onClick={()=>setShowModal(true)}>Click model</button>
    <Modal isVisible={showModal} onClose={()=>setShowModal(false)}>
      <h1>hello reda</h1>
      <input type="text" />
      <button>add</button>
      </Modal>
    </>
  )
}
