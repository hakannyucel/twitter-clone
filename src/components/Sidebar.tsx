import React from 'react';
import { AiOutlineBell, AiOutlineEllipsis, AiOutlineHome, AiOutlineSearch, AiOutlineTwitter, AiOutlineUser } from 'react-icons/ai';
import SidebarMenuButton from './SidebarMenuButton';

const Sidebar: React.FC = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className='w-4/12 hidden flex-col px-4 sm:flex'>
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

            <div className='mt-3 hover:bg-gray-800 transition rounded-full p-2 flex w-full items-center justify-between cursor-pointer relative'>
                <div>
                    <img src="/assets/profile.jpg" alt="" width={40} height={40} className='rounded-full' />
                </div>
                <div className='flex flex-col text-sm'>
                    <span className='font-bold'>Hakan</span>
                    <span className='text-gray-500'>@hakanyucel</span>
                </div>
                <div><AiOutlineEllipsis size={25} color='#ddd' onClick={() => setIsOpen(!isOpen)} /></div>
                <UserOverFlowMenu isOpen={isOpen} />
            </div>
        </div>
    )
}

interface IUserOverFlowMenu {
    isOpen: boolean
}

const UserOverFlowMenu: React.FC<IUserOverFlowMenu> = ({isOpen}) => {
    return (
        <div className={`w-64 border text-sm border-gray-800 bg-black shadow-sm absolute top-[-120px] left-0 rounded-3xl py-4 flex flex-col select-none transition-all duration-300 ${!isOpen ? 'opacity-0' : 'opacity-100'}`}>
            <a className='w-100 px-4 py-2 font-bold text-gray-200 hover:bg-gray-800 transition' href="/#">Add an existing account</a>
            <a className='w-100 px-4 py-2 font-bold text-gray-200 hover:bg-gray-800 transition' href="/#">Log out @hakannyucel</a>
        </div>
    )
}

export default Sidebar;