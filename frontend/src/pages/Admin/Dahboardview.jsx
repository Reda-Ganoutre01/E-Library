import { useState } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector, } from "react-redux";
import { logout } from "../../features/auth/AuthSlice";


const DashboardView = () => {
  const [open, setOpen] = useState(false);
  // const Admin_username=localStorage.getItem("username")
  const { user } = useSelector((state) => state.auth);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const showProfile = () => setOpen(!open);
 
  
    const handleLogout = () => {
      const confirmLogout=window.confirm("Are you sure you want to logout?");
      if(confirmLogout){
      dispatch(logout())
     navigate("/")
     window.location.reload();
      }
     
    };

  return (
    <div className="bg-white shadow-lg">
      <div className="flex items-center justify-between h-[70px] px-[25px]">
        <div className="flex items-center rounded-[5px]"></div>

        <div className="flex items-center gap-[20px]">
       

          <div className="flex items-center gap-[15px] relative cursor-pointer" onClick={showProfile}>
            <p className="text-gray-700 font-semibold">{user?.sub}</p>
            <div className="h-[36px] w-[36x] rounded-full bg-[#4E73DF] flex items-center justify-center">
              <AccountCircleRoundedIcon className="text-white" fontSize="large" />
            </div>

            {open && (
              <div className="bg-white shadow-md border rounded-md h-[120px] w-[150px] absolute top-[65px] right-0 p-[15px] space-y-[10px] z-50">
                
                <Link to={"/admin/profile"}>
                <p className="cursor-pointer hover:text-blue-600 font-semibold transition duration-200">Profile</p>

                </Link>
                <button  className="cursor-pointer hover:text-blue-600 font-semibold transition duration-200"
                 onClick={handleLogout}>Log out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
