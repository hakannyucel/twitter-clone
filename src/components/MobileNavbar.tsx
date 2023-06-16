import React from 'react';
import { AiOutlineBell, AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';

const MobileNavbar: React.FC = () => {
      return (
    <nav className="fixed sm:hidden bottom-0 left-0 right-0 bg-black border-t border-t-gray-700 flex justify-around p-4 select-none">
      <a href='/' className="flex flex-col items-center">
        <AiOutlineHome size={30} color='#ddd' />
      </a>
      <a href='/explore' className="flex flex-col items-center">
        <AiOutlineSearch size={30} color='#ddd' />
      </a>
      <a href='/#' className="flex flex-col items-center">
        <AiOutlineBell size={30} color='#ddd' />
      </a>
      <a href='/#' className="flex flex-col items-center">
        <img src="/assets/profile.jpg" alt="" width={30} height={30} className='rounded-full' />
      </a>
    </nav>
  );

}

export default MobileNavbar;