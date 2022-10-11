import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;

    return (
        <div className="max-w-xs rounded-md shadow-md p-3 bg-slate-100">
            <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-2 space-y-4">
                <div className="space-y-3 flex justify-between items-center">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className='font-semibold'>Quiz : <span className=' font-bold text-gray-800 '>{total}</span></p>
                </div>
                <button type="button" className="bg-indigo-600 text-white font-semibold flex justify-between items-center w-full p-3 tracking-wide rounded-md">
                    <div>Start Quiz</div>
                    <ArrowLongRightIcon className='h-8 w-8'></ArrowLongRightIcon>
                </button>
            </div>
        </div>
    );
};

export default Topic;