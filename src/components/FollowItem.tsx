import React from 'react';

interface FollowItemProp {
    fullName: string,
    username: string
}

const FollowItem: React.FC<FollowItemProp> = ({fullName, username}) => {

    return (
        <div className='hover:bg-gray-800 transition px-2 py-4 flex w-full items-center justify-between cursor-pointer'>
            <div className='flex space-x-4'>
                <img src="/twitter-clone/assets/profile.jpg" alt="" width={40} height={40} className='rounded-full' />
                <div className='flex flex-col text-sm'>
                    <span className='font-bold'>{fullName}</span>
                    <span className='text-gray-500'>{username}</span>
                </div>
            </div>
            <button className='bg-white text-gray-900 text-sm font-bold rounded-full px-3 py-2 hover:brightness-75 transition'>Follow</button>
        </div>
    )
}

export default FollowItem;