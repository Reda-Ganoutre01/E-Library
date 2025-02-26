
import React from 'react'
import NotFound from '../components/Notfond/NotFound'

export default function NotFoundPage() {
  const role=localStorage.getItem('role')

  return (
    <>
    <NotFound role={role}/>
    </>
  )
}
