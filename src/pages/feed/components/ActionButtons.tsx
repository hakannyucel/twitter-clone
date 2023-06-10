import React from 'react';
import { AiOutlineHeart, AiOutlineUpload } from 'react-icons/ai';
import { BiBarChart } from 'react-icons/bi';
import { FaRegComment, FaRecycle } from 'react-icons/fa';

interface ActionButtonsProp {
    retweetCount: number,
    likeCount: number,
    commentCount: number,
    viewCount: number
}

const ActionButtons: React.FC<ActionButtonsProp> = ({retweetCount, likeCount, commentCount, viewCount}) => {
    return (
        <div className='flex justify-around items-center text-gray-500'>
            <div className='flex space-x-2 px-4 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-900 transition rounded-full'>
                <FaRegComment size={20} color='#ddd' className='hover:text-gray-200 transition' /> <span>{commentCount.toString()}</span>
            </div>

            <div className='flex space-x-2 px-4 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-900 transition rounded-full'>
                <FaRecycle size={20} color='#ddd' /> <span>{retweetCount.toString()}</span>
            </div>

            <div className='flex space-x-2 px-4 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-900 transition rounded-full'>
                <AiOutlineHeart size={20} color="#ddd" /> <span>{likeCount.toString()}</span>
            </div>
            <div className='flex space-x-2 px-4 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-900 transition rounded-full'>
                <BiBarChart size={20} color='#ddd' /> <span>{viewCount.toString()}M</span>
            </div>
            <div className='flex space-x-2 px-4 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-900 transition rounded-full'>
                <AiOutlineUpload size={20} style={{color: "#ddd", fill: "#ddd"}} />
            </div>
        </div>
    )
}

export default ActionButtons;