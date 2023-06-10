import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col border-b-2 border-gray-800">
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
  );
};

export default Header;
