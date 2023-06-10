import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import Trends from '../../components/Trends';

const Explore: React.FC = () => {
    return (
        <div className='flex flex-col p-4'>
            <div className='flex justify-between items-center'>
                <input type="text" name='explore' placeholder='Search Twitter' className='flex-1 outline-none py-2 px-4 border-2 border-gray-800 bg-gray-800 placeholder:text-gray-500 rounded-full focus:bg-black focus:border-2 focus:border-blue-500 transition' />
                <div className='ml-14 cursor-pointer hover:bg-gray-800 transition p-2 rounded-full'>
                    <AiOutlineSetting size={20} color='#ddd' />
                </div>
            </div>
            <Trends />

        </div>
    )
}

export default Explore;