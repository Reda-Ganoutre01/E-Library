import React, { useState } from 'react'
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Dahboardview = () => {
    const [open, setOpen] = useState(false)

    const showProfile = () => {
        // alert("helloo")
        setOpen(!open)
    }

    return (
        <div className=''>
            <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px] '>
                <div className='flex items-center rounded-[5px]'>
                   

                </div>
                <div className='flex items-center gap-[20px]'>
                    <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
                        <FaRegBell />
                        <FaEnvelope />
                    </div>
                    <div className='flex items-center gap-[15px] relative' onClick={showProfile} >
                        <p>Douglas McGee</p>
                        <div className='h-[50px] w-[50px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative z-40' >
                           
                                <AccountCircleRoundedIcon  color="white"/>

                        </div>

                        {
                            open &&
                            <div className='bg-white border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]'>
                                <p className='cursor-pointer hover:text-[blue] font-semibold'>Profile</p>
                                <p className='cursor-pointer hover:text-[blue] font-semibold'>Log out</p>
                            </div>

                        }



                    </div>
                </div>
            </div>
        </div>
    )
//   return (
//     <div className='flex items-center justify-between h-[70px] shadow-lg  px-[25px]'>

//       <div className="flex items-center rounded-[5px]">
//   <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
//         <FaRegBell/>
//         <FaEnvelope />

//       </div>
//       <div className="flex items-center gap-[15px] relative">
//         <p>Redux Rpg</p>
//         <div className="h-[50px] w-[50px] rounded-full bg-primary cursor-pointer flex items-center
//         justify-center relative
//         ">
//         <AccountCircleRoundedIcon  color="white"/>
//         </div>
//       </div>
//       </div>
    
//     </div>
//   )
}

export default Dahboardview
