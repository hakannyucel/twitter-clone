import React from 'react';

const SearchFilter: React.FC = () => {
    return (
        <div className='border-2 border-gray-800 rounded-xl'>
            <p className='font-semibold text-xl p-3'>Search filters</p>
            <div className='flex flex-col px-3 py-2 text-sm'>
                <div className='my-2 flex flex-col space-y-1'>
                    <span className='font-bold'>People</span>
                    <div className='flex justify-between items-center'>
                        <span>From anyone</span>
                        <input type="radio" name='people' />
                    </div>

                    <div className='flex justify-between items-center'>
                        <span>People you follow</span>
                        <input type="radio" name='people' />
                    </div>
                </div>
                <div className='my-2 flex flex-col space-y-1'>
                    <span className='font-bold'>Location</span>
                    <div className='flex justify-between items-center'>
                        <span>Anywhere</span>
                        <input type="radio" name='location' />
                    </div>

                    <div className='flex justify-between items-center'>
                        <span>Near you</span>
                        <input type="radio" name='location' />
                    </div>
                </div>
            </div>
            <a href="#" className='p-3 w-full block text-blue-500 text-sm hover:bg-gray-800 transition rounded-lg rounded-t-none'>Advanced search</a>
        </div>
    )
}

export default SearchFilter;