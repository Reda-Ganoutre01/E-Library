import React, { useState } from "react";
import { FaEnvelope, FaRegBell } from "react-icons/fa";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const DashboardView = () => {
  const [open, setOpen] = useState(false);

  // Toggle profile dropdown
  const showProfile = () => setOpen(!open);

  return (
    <div className="bg-white shadow-lg">
      <div className="flex items-center justify-between h-[70px] px-[25px]">
        <div className="flex items-center rounded-[5px]"></div>

        <div className="flex items-center gap-[20px]">
       

          <div className="flex items-center gap-[15px] relative cursor-pointer" onClick={showProfile}>
            <p className="text-gray-700 font-semibold">Douglas McGee</p>
            <div className="h-[36px] w-[36x] rounded-full bg-[#4E73DF] flex items-center justify-center">
              <AccountCircleRoundedIcon className="text-white" fontSize="large" />
            </div>

            {open && (
              <div className="bg-white shadow-md border rounded-md h-[120px] w-[150px] absolute top-[65px] right-0 p-[15px] space-y-[10px] z-50">
                <p className="cursor-pointer hover:text-blue-600 font-semibold transition duration-200">Profile</p>
                <p className="cursor-pointer hover:text-blue-600 font-semibold transition duration-200">Log out</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
