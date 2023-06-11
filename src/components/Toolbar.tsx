import React from 'react';
import SearchFilter from './SearchFilter';
import Trends from './Trends';
import Policies from './Policies';
import WhoToFollow from './WhoToFollow';

const Toolbar: React.FC = () => {
    return (
        <div className='w-2/4 hidden sm:flex flex-col m-3'>
            <SearchFilter />
            <Trends backgroundColor='bg-gray-900' />
            <WhoToFollow />
            <Policies />
        </div>
    )
}

export default Toolbar;