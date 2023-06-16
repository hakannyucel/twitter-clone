import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineUpload } from 'react-icons/ai';
import { BiBarChart } from 'react-icons/bi';
import { FaRegComment, FaRecycle } from 'react-icons/fa';
import SingleActionButton from '../../../components/SingleActionButton';

interface ActionButtonsProp {
    retweetCount: number,
    likeCount: number,
    commentCount: number,
    viewCount: number
}

const ActionButtons: React.FC<ActionButtonsProp> = (props) => {
    const [retweetCount, setRetweetCount] = useState(props.retweetCount);
    const [likeCount, setLikeCount] = useState(props.likeCount);
    const [commentCount, setCommentCount] = useState(props.commentCount);
    const [isLiked, setIsLiked] = useState(false);


    return (
        <div className='flex justify-around items-center text-gray-500 text-xs sm:text-base select-none'>

            <SingleActionButton 
                icon={<FaRegComment size={20} color='#ddd' className='hover:text-gray-200 transition' />} 
                onClick={() => setCommentCount(commentCount + 1)}
                text={commentCount.toString()} />

            <SingleActionButton 
                icon={<FaRecycle size={20} color='#ddd' className='hover:text-gray-200 transition' />} 
                onClick={() => setRetweetCount(retweetCount + 1)}
                text={retweetCount.toString()} />

            <SingleActionButton 
                icon={<AiOutlineHeart size={20} color='#ddd' fill={isLiked ? 'red' : '#ddd'} className='hover:text-gray-200 transition' />} 
                onClick={() => {
                      setIsLiked(!isLiked);
                      setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
                    }}
                text={likeCount.toString()} />


            <div className='hidden sm:flex space-x-2 px-4 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-900 transition rounded-full'>
                <BiBarChart size={20} color='#ddd' /> <span>{props.viewCount.toString()}M</span>
            </div>
            <div className='flex space-x-2 px-2 md:px-4 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-900 transition rounded-full'>
                <AiOutlineUpload size={20} style={{color: "#ddd", fill: "#ddd"}} />
            </div>
        </div>
    )
}

export default ActionButtons;