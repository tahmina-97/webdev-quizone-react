import React from 'react';

const Option = ({ option, idx, handleOption }) => {
    return (
        <div onClick={() => handleOption(option)} className="flex items-center mb-3">
            <input id={`radio-${idx}`} type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />


            <label htmlFor={`radio-${idx}`} className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">{option}</label>
        </div >






    );
};

export default Option;