import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';

const SidebarProfile : React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    let menuRef = useRef(HTMLDivElement.prototype);

    useEffect(() => {
        let handler = (e:any) => {
            if (!menuRef.current.contains(e.target)){
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handler);
    })

    return (
        <div className='relative mt-3'>
            <div className='hover:bg-gray-800 transition rounded-full p-2 flex w-full items-center justify-between cursor-pointer relative' ref={menuRef} onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <img src="/assets/profile.jpg" alt="" width={40} height={40} className='rounded-full' />
                </div>
                <div className='flex flex-col text-sm'>
                    <span className='font-bold'>Hakan</span>
                    <span className='text-gray-500'>@hakanyucel</span>
                </div>
                <div><AiOutlineEllipsis size={25} color='#ddd' /></div>
            </div>
            <UserOverFlowMenu isOpen={isOpen} />
        </div>
    )
}

interface IUserOverFlowMenu {
    isOpen: boolean
}

const UserOverFlowMenu: React.FC<IUserOverFlowMenu> = ({isOpen}) => {
    return (
        <div className={`w-64 border-2 text-sm border-gray-800 bg-black shadow absolute top-[-120px] left-0 rounded-3xl py-4 flex flex-col select-none transition-all duration-300
            ${!isOpen ? 'opacity-0' : 'opacity-100'} after after:bg-black after:border-r-2 after:border-b-2 after:border-gray-800 after:rotate-45 after:absolute after:w-3 after:h-3 
            after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:content-[''] after:text-white after:shadow`}>
            <a className='w-100 px-4 py-2 font-bold text-gray-200 hover:bg-gray-800 transition' href="/#">Add an existing account</a>
            <a className='w-100 px-4 py-2 font-bold text-gray-200 hover:bg-gray-800 transition' href="/#">Log out @hakannyucel</a>
        </div>
    )
}

export default SidebarProfile;