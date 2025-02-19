import React, { useState } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import UserService from "../../services/UserService";
import { useNavigate } from "react-router-dom";

const DashboardView = () => {
  const [open, setOpen] = useState(false);
  const Admin_username=localStorage.getItem("username")
  const navigate=useNavigate()

  const showProfile = () => setOpen(!open);
 
  const logout=()=>{
    const confirmLogout=window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      UserService.logout();
      navigate("/");
      window.location.reload();
    }
  }

  return (
    <div className="bg-white shadow-lg">
      <div className="flex items-center justify-between h-[70px] px-[25px]">
        <div className="flex items-center rounded-[5px]"></div>

        <div className="flex items-center gap-[20px]">
       

          <div className="flex items-center gap-[15px] relative cursor-pointer" onClick={showProfile}>
            <p className="text-gray-700 font-semibold">{Admin_username && Admin_username}</p>
            <div className="h-[36px] w-[36x] rounded-full bg-[#4E73DF] flex items-center justify-center">
              <AccountCircleRoundedIcon className="text-white" fontSize="large" />
            </div>

            {open && (
              <div className="bg-white shadow-md border rounded-md h-[120px] w-[150px] absolute top-[65px] right-0 p-[15px] space-y-[10px] z-50">
                
                <p className="cursor-pointer hover:text-blue-600 font-semibold transition duration-200">Profile</p>
                <button  className="cursor-pointer hover:text-blue-600 font-semibold transition duration-200"
                 onClick={logout}>Log out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
