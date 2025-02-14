import React from 'react'
import { Link } from 'react-router-dom'

const CardItems = ({title,count,link}) => {
  return (
    <>
      <div className="bg-green-600 w-[350px]
      h-[100px]
      text-white
      ">
        <div className="flex">
            <p className='justify-center text-2xl '>{title}</p>
            <p className='text-2xl'>{count}</p>
      </div>
      <div className="flex justify-center mt-8">
        <Link 
        className='
        bg-blue-700 
        w-[100px]
        text-center 
        h=[200px]
        text-white'
        to={`/admin/dashboard/${link}`}>{title}</Link>
      </div>
      </div>
    </>
  )
}

export default CardItems
