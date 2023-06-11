import React from 'react';
import { AiOutlineBell, AiOutlineEllipsis, AiOutlineHome, AiOutlineSearch, AiOutlineTwitter, AiOutlineUser } from 'react-icons/ai';
import SidebarMenuButton from './SidebarMenuButton';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {

    return (
        <div className='w-4/12 flex flex-col px-4'>
            <div>
                <Link to="/" className='inline-block hover:bg-gray-800 transition rounded-full p-2 m-2'>
                    <AiOutlineTwitter size={30} color='#ddd' />
                </Link>
            </div>
            <div className='flex flex-col'>
                <SidebarMenuButton icon={<AiOutlineHome size={30} color='#ddd' />} link='/' title={"Home"} hasNotification={true} />
                <SidebarMenuButton icon={<AiOutlineSearch size={30} color='#ddd' />} link='/explore' title={"Explore"} />
                <SidebarMenuButton icon={<AiOutlineBell size={30} color='#ddd' />} link='#' title={"Notification"} />
                <SidebarMenuButton icon={<AiOutlineUser size={30} color='#ddd' />} link='#' title={"Profile"} />
                <SidebarMenuButton icon={<AiOutlineEllipsis size={30} color='#ddd' />} link='#' title={"More"} />
            </div>
            <div className='mt-3'>
                <button className='py-3 px-10 bg-blue-400 rounded-3xl text-white font-bold w-full tracking-wider hover:brightness-75 transition'>Tweet</button>
            </div>

            <div className='mt-3 hover:bg-gray-800 transition rounded-full p-2 flex w-full items-center justify-between cursor-pointer'>
                <div>
                    <img src="/assets/profile.jpg" alt="" width={40} height={40} className='rounded-full' />
                </div>
                <div className='flex flex-col text-sm'>
                    <span className='font-bold'>Hakan</span>
                    <span className='text-gray-500'>@hakanyucel</span>
                </div>
                <div><AiOutlineEllipsis size={25} color='#ddd' /></div>
            </div>
        </div>
    )
}

export default Sidebar;