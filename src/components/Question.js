import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from './Option';

const Question = ({ ques, idx }) => {
    const { question, options, correctAnswer, id } = ques;
    const handleOption = (givenAns) => {
        if (givenAns !== correctAnswer) {
            toast.error('Oh no! Wrong Answer!!', { autoClose: 2000, theme: "colored" })
        }
        else {
            toast.success('Yes! You are Right!!', { autoClose: 2000, theme: "colored" })
        }

    }

    const showAnswer = (answer) => {
        toast.info(answer, { autoClose: 2000, theme: "colored" });
    }

    return (

        <div className=' card card-compact bg-base-100 shadow-xl  bg-gray-200 py-5 px-10 md:w-4/6 mx-6'>
            <div className='flex justify-between mb-6'>
                <h2 className='text-xl font-semibold text-gray-600 '> <span className='text-indigo-600 pr-2'>Quiz-{idx + 1}:</span> {question.substring(3, question.length - 4)}</h2>
                <EyeIcon onClick={() => showAnswer(correctAnswer)} className='h-5 w-5 text-indigo-400 ml-6 hover:text-indigo-600'></EyeIcon>
            </div>

            <div className='grid grid-cols-2 gap-5'>
                {
                    options.map((option, idx) => <Option
                        key={idx}
                        option={option}
                        handleOption={handleOption}
                        idx={idx}
                    ></Option>)
                }
            </div>







        </div>
    );
};

export default Question;