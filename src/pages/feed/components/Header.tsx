import React, { useState } from "react";
import { AiOutlineTwitter } from 'react-icons/ai';
import HeaderSidebar from "../../../components/HeaderSidebar";

const Header: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsMobileSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsMobileSidebarOpen(false);
  };
  return (
    <>
      <div className="hidden sm:flex flex-col border-b-2 border-gray-800">
        <p className="p-4 text-white font-bold tracking-wider text-xl">Home</p>

        <div className="flex w-full text-center h-14">
          <div className="hover:bg-gray-800 transition flex-1 h-full flex justify-center items-center relative cursor-pointer">
            <span className="font-bold text-white">For you</span>
            <div className="absolute w-20 rounded-full bg-blue-500 left-1/2 bottom-0 h-1 -translate-x-1/2"></div>
          </div>

          <div className="hover:bg-gray-800 transition flex-1 h-full flex justify-center items-center relative cursor-pointer">
            <span className="text-gray-500">Following</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 sm:hidden">
        <img src="/assets/profile.jpg" className="rounded-full" width={30} height={30} alt="" onClick={openSidebar} />
        <a href="/">
          <AiOutlineTwitter color="#3c82f6" size={30} />
        </a>
      </div>
      <HeaderSidebar isOpen={isMobileSidebarOpen} closeSidebar={closeSidebar} />
    </>
  );
};

export default Header;