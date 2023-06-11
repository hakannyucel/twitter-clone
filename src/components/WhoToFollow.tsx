import React from 'react';
import FollowItem from './FollowItem';
import { Link } from 'react-router-dom';

const WhoToFollow: React.FC = () => {
    return (
        <div>
            <div className='bg-gray-900 rounded-xl my-3'>
                <p className='font-semibold text-xl p-3'>Who to follow</p>
                <div className='flex flex-col'>
                    <FollowItem fullName='Hakan Yücel' username='@hakannyucel' />
                    <FollowItem fullName='Hakan Yücel' username='@hakannyucel' />
                    <FollowItem fullName='Hakan Yücel' username='@hakannyucel' />
                    <FollowItem fullName='Hakan Yücel' username='@hakannyucel' />
                </div>
                <Link to ="#" className='p-3 w-full block text-blue-500 text-sm hover:bg-gray-800 transition rounded-lg rounded-t-none'>Show more</Link>
            </div>
        </div>
    )
}

export default WhoToFollow;