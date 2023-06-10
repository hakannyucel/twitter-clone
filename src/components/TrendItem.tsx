import React from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';

interface TrendItemProp {
    trend: string
    tag: string
    tweets: string
}

const TrendItem: React.FC<TrendItemProp> = ({trend, tag, tweets}) => {
    return (
        <div className='flex justify-between p-3 cursor-pointer hover:bg-gray-800 transition'>
            <div className='flex flex-col space-y-1'>
                <span className='text-xs text-gray-600'>{trend}</span>
                <span className='text-white text-sm font-bold'>{tag}</span>
                <span className='text-xs text-gray-600'>{tweets}</span>
            </div>
            <div >
                <div className='p-2 hover:bg-gray-700 transition-all rounded-full'>
                    <AiOutlineEllipsis size={20} color='#ddd' />
                </div>
            </div>
        </div>
    )
}

export default TrendItem;