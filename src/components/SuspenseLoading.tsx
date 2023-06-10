import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';

const SuspenseLoading: React.FC = () => {
    return (
        <div className='w-full h-screen bg-black flex justify-center items-center'>
            <AiOutlineTwitter size={100} color='#1A8CD8' />
        </div>
    )
}

export default SuspenseLoading;