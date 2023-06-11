import React from 'react';
import { Link } from 'react-router-dom';

const Policies: React.FC = () => {
    return (
        <div className='flex flex-wrap space-x-5 text-sm text-gray-600 my-4'>
            <Link to={"#"} className='hover:text-gray-500 transition'>Terms of Service</Link>
            <Link to={"#"} className='hover:text-gray-500 transition'>Privacy Policy</Link>
            <Link to={"#"} className='hover:text-gray-500 transition'>Cookie Policy</Link>
            <Link to={"#"} className='hover:text-gray-500 transition'>Imprint</Link>
            <Link to={"#"} className='hover:text-gray-500 transition'>Accessibilty</Link>
            <Link to={"#"} className='hover:text-gray-500 transition'>Ads info</Link>
        </div>
    )
}

export default Policies;