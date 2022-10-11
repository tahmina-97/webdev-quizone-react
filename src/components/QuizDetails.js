import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const QuizDetails = () => {
    const quizData = useLoaderData();
    const questionsData = quizData.data;
    const { name, questions } = questionsData;
    console.log(questions);
    return (
        <div>
            <h1 className='text-center text-5xl font-bold text-gray-700 p-4 mb-14'>Quiz on {name}</h1>
            <div className=' grid grid-cols-1 justify-items-center gap-5'>
                {
                    questions.map((ques, idx) => <Question
                        key={ques.id}
                        ques={ques}
                        idx={idx}
                    >
                    </Question>)
                }
            </div>

        </div>
    );
};

export default QuizDetails;