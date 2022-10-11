import React from 'react';

const Question = ({ ques, idx }) => {
    const { question, options, correctAnswer, id } = ques;
    return (

        <div className=' card card-compact bg-base-100 shadow-xl  bg-slate-100 p-6 '>
            <h2 className='text-xl font-semibold text-gray-600 mb-6'> <span className='text-indigo-700 pr-2'>Quiz-{idx + 1}:</span> {question.substring(3, question.length - 4)}</h2>




        </div>
    );
};

export default Question;