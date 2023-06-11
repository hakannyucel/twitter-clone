import React from 'react';
import Sidebar from '../components/Sidebar';
import Toolbar from '../components/Toolbar';

interface LayoutProp {
    children: string | JSX.Element | JSX.Element[]
}

const Layout: React.FC<LayoutProp> = ({children}) => {
    return(
        <div className='w-full bg-black min-h-screen text-gray-200'>
            <div className='flex sm:w-8/12 m-auto'>
                <Sidebar />
                <div className='w-full sm:border-x-2 border-gray-800'>
                    {children}
                </div>
                <Toolbar />
            </div>
        </div>
    )
}

export default Layout;