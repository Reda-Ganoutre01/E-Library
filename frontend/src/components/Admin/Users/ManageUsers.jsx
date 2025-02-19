import React, { useEffect, useState } from 'react'
import UserService from '../../../services/UserService'

export default function ManageUsers (){
  const token=localStorage.getItem('token')
  const [users,setUsers]=useState([])
  useEffect(()=>{
    UserService.getAllUsers(token)
    .then((response)=>setUsers(response.data.content))
  },[])

  console.log(users)
  console.log(token)

  return (
    <div className='py-10'>
    <div className="flex items-center justify-center text-black text-2xl underline
    font-seri decoration-primary">Users</div>
</div>  )
}
