import React from 'react';
import TrendItem from './TrendItem';

interface TrendsProp {
    backgroundColor?: string
}

const Trends: React.FC<TrendsProp> = ({backgroundColor}) => {
    return (
        <div>
            <div className={`rounded-xl my-3 ${backgroundColor}`}>
                <p className='font-semibold text-xl p-3'>Trends for you</p>
                <div className='flex flex-col'>
                    <TrendItem trend='Trending in Turkey' tag='#altcoin' tweets='70.2k tweets' />
                    <TrendItem trend='Trending in Turkey' tag='#istanbul23' tweets='60.2k tweets' />
                    <TrendItem trend='Trending in Turkey' tag='Sabiha Gökçen' tweets='20.2k tweets' />
                    <TrendItem trend='Trending in Turkey' tag='Talisca' tweets='15k tweets' />
                </div>
                <a href="#" className='p-3 w-full block text-blue-500 text-sm hover:bg-gray-800 transition rounded-lg rounded-t-none'>Show more</a>
            </div>
        </div>
    )
}

export default Trends;