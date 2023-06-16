import { motion } from 'framer-motion';
import React from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

interface IHeaderSidebar {
  isOpen: boolean,
  closeSidebar: () => void
}
const HeaderSidebar: React.FC<IHeaderSidebar> = ({ isOpen, closeSidebar }) => {

  return (
    <motion.div
      initial={{ x: -320 }}
      animate={{ x: isOpen ? 0 : -320 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed sm:hidden h-screen top-0 bg-black w-3/4 border-r border-r-gray-800 p-4"
    >
      <div className="flex justify-between">
        <span className="font-bold">Account info</span>
        <div onClick={closeSidebar} className="cursor-pointer"><AiOutlineClose size={20} color="#ddd" /></div>
      </div>
      <div className="flex justify-between items-start my-6">
        <div className="flex flex-col">
          <img src="/assets/profile.jpg" alt="" className="rounded-full" width={40} height={40} />
          <div className="flex flex-col">
            <span className="font-extrabold">Hakan</span>
            <span className="text-sm text-gray-500">@hakannyucel</span>
          </div>
          <div className="flex items-center space-x-5 my-3 text-sm">
            <div><span className="font-extrabold">74</span>{" "}<span className="text-gray-500">Following</span></div>
            <div><span className="font-extrabold">7</span>{" "}<span className="text-gray-500">Followers</span></div>
          </div>
        </div>
        <div className="border border-gray-500 p-2 rounded-full"><AiOutlinePlus size={18} color="white" /></div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

    </motion.div>
  );
};

export default HeaderSidebar;
