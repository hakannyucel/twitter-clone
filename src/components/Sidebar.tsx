import React from 'react';
import { AiOutlineBell, AiOutlineEllipsis, AiOutlineHome, AiOutlineSearch, AiOutlineTwitter, AiOutlineUser } from 'react-icons/ai';
import SidebarMenuButton from './SidebarMenuButton';
import SidebarProfile from './SidebarProfile';

const Sidebar: React.FC = () => {

    return (
        <div className='hidden w-4/12 sm:block'>
            <div className='flex flex-col fixed px-4'>
                <div>
                    <a href="/" className='inline-block hover:bg-gray-800 transition rounded-full p-2 m-2'>
                        <AiOutlineTwitter size={30} color='#ddd' />
                    </a>
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

                <SidebarProfile />
            </div>
        </div>
    )
}


export default Sidebar;