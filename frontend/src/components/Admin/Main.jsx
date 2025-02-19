import React from 'react'
import { FaRegCalendarMinus } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='pt-[25px] px-[25px] bg-[#F8F9FC]'>
      <div className="flex items-center justify-between">
        <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>Dashboard</h1>
        <button className='bg-[#2E59D9] h-[32px] rounded-[3px] text-white
        flex items-center justify-center px-[30px] cursor-pointer
        '>Generate Report</button>
      </div>
      <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>

{/* USERS */}
<div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF]
    flex items-center justify-center px-[30px] cursor-pointer hover:lg transform hover:scale-[103%]
    transition duration-300 ea
    '>
        <div>
            <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
        </div>
        <FaRegCalendarMinus fontSize={28} color=''/>
    </div>
    {/* Emprunt */}
    <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF]
    flex items-center justify-center px-[30px] cursor-pointer hover:lg transform hover:scale-[103%]
    transition duration-300 ea
    '>
        <div>
            <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
        </div>
        <FaRegCalendarMinus fontSize={28} color=''/>
    </div>

    
    {/* Books */}
    <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF]
    flex items-center justify-center px-[30px] cursor-pointer hover:lg transform hover:scale-[103%]
    transition duration-300 ea
    '>
        <div>
            <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
        </div>
        <FaRegCalendarMinus fontSize={28} color=''/>
    </div>
{/* Categories */}
<div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF]
    flex items-center justify-center px-[30px] cursor-pointer hover:lg transform hover:scale-[103%]
    transition duration-300 ea
    '>
        <div>
            <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
        </div>
        <FaRegCalendarMinus fontSize={28} color=''/>
    </div>


      </div>
    </div>
  )
}

export default Main
