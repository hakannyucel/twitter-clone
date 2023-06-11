import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarMenuButtonProp {
    hasNotification?: boolean,
    icon?: React.ReactNode,
    link: string,
    title: string
}

const SidebarMenuButton: React.FC<SidebarMenuButtonProp> = ({hasNotification, icon, link, title}) => {
    return (
        <Link to={link} className='flex items-center w-full p-3 hover:bg-gray-800 transition rounded-3xl' color='#ddd'>
            <div className='relative'>
                {icon}
                {hasNotification 
                ? <div className='w-2 h-2 bg-blue-500 rounded absolute right-0 top-0'></div>
                : <></>}
            </div>
            <span className='ml-4 text-lg font-normal tracking-wider'>{title}</span>
        </Link>
    )
}

export default SidebarMenuButton;