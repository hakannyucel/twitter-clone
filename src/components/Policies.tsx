import React from 'react';

const Policies: React.FC = () => {
    return (
        <div className='flex flex-wrap space-x-5 text-sm text-gray-600 my-4'>
            <a href="#" className='hover:text-gray-500 transition'>Terms of Service</a>
            <a href="#" className='hover:text-gray-500 transition'>Privacy Policy</a>
            <a href="#" className='hover:text-gray-500 transition'>Cookie Policy</a>
            <a href="#" className='hover:text-gray-500 transition'>Imprint</a>
            <a href="#" className='hover:text-gray-500 transition'>Accessibilty</a>
            <a href="#" className='hover:text-gray-500 transition'>Ads info</a>
        </div>
    )
}

export default Policies;