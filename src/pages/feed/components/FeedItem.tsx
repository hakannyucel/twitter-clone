import React from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import ActionButtons from './ActionButtons';

interface FeedItemProp {
    fullName: string,
    username: string,
    content: string,
    likeCount: number,
    retweetCount: number,
    commentCount: number,
    viewCount: number
}

const FeedItem: React.FC<FeedItemProp> = ({fullName, username, content, likeCount, retweetCount, commentCount, viewCount}) => {

    return (
        <div className='flex p-4 pb-2 border-b-2 border-gray-800'>
            <div>
                <img src="/assets/profile.jpg" alt="" width={40} height={40} className='rounded-full' />
            </div>
            <div className='flex flex-col space-y-1 px-2 w-full'>
                <div className='flex justify-between items-center'>
                    <a href="/#">
                        <span className='font-bold text-white hover:underline transition'>{fullName}</span>  <span className='text-gray-500 text-sm'>{username}</span>
                    </a>
                    <div className='cursor-pointer hover:bg-gray-800 transition rounded-full'><AiOutlineEllipsis size={25} color='#ddd' /></div>
                </div>
                <div>
                    <span>{content}</span>
                </div>
                <ActionButtons likeCount={likeCount} retweetCount={retweetCount} commentCount={commentCount} viewCount={viewCount} />
            </div>

        </div>
    )
}

export default FeedItem;