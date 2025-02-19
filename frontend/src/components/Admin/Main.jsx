import React from "react";
import CountUp from "react-countup";
import { FaBook, FaLayerGroup, FaUsers } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";

const Main = () => {
  return (
    <div className="pt-6 px-6 bg-[#F8F9FC] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[#5a5c69] text-2xl font-semibold cursor-pointer">Dashboard</h1>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 pb-4">
        {/* Users */}
        <div className="h-[100px] flex items-center justify-between px-6 bg-white border-l-4 border-[#4E73DF] shadow-md rounded-lg cursor-pointer transform hover:scale-105 transition duration-300">
          <div>
            <h2 className="text-[#1cc88a] text-xs font-bold uppercase">Users</h2>
            <h1 className="text-xl font-bold text-[#5a5c69] mt-1">
            <CountUp start={0} end={10} delay={0}/>

            </h1>
          </div>
          <FaUsers className="text-[#4E73DF] text-3xl" />
        </div>

        {/* Books Monthly */}
        <div className="h-[100px] flex items-center justify-between px-6 bg-white border-l-4 border-[#4E73DF] shadow-md rounded-lg cursor-pointer transform hover:scale-105 transition duration-300">
          <div>
            <h2 className="text-[#1cc88a] text-xs font-bold uppercase">Books (Monthly)</h2>
            <h1 className="text-xl font-bold text-[#5a5c69] mt-1">
            <CountUp start={0} end={50} delay={0}/>

            </h1>
          </div>
          <MdOutlineLibraryBooks className="text-[#4E73DF] text-3xl" />
        </div>

        {/* Borrowed Records */}
        <div className="h-[100px] flex items-center justify-between px-6 bg-white border-l-4 border-[#4E73DF] shadow-md rounded-lg cursor-pointer transform hover:scale-105 transition duration-300">
          <div>
            <h2 className="text-[#B589DF] text-xs font-bold uppercase">Borrowed Records</h2>
            <h1 className="text-xl font-bold text-[#5a5c69] mt-1">
            <CountUp start={0} end={10} delay={0}/>
            </h1>
          </div>
          <FaBook className="text-[#4E73DF] text-3xl" />
        </div>

        {/* Categories */}
        <div className="h-[100px] flex items-center justify-between px-6 bg-white border-l-4 border-[#4E73DF] shadow-md rounded-lg cursor-pointer transform hover:scale-105 transition duration-300">
          <div>
            <h2 className="text-[#B589DF] text-xs font-bold uppercase">Categories</h2>
            <h1 className="text-xl font-bold text-[#5a5c69] mt-1">
                      <CountUp start={10} end={20}/>
                
                </h1>
          </div>
          <FaLayerGroup className="text-[#4E73DF] text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Main;
