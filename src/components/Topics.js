import React, { useContext } from 'react';
import { TopicsContext } from './Root';
import Topic from './Topic';

const Topics = () => {
    const topics = useContext(TopicsContext);

    return (
        <div className='mx-10 md:mx-20'>
            <h1 className='text-center text-5xl font-bold text-gray-700 p-4 mb-14'>Quiz on Fundamental Topics</h1>
            <div className='grid md:grid-cols-2 gap-8 justify-items-center'>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>

        </div>
    );
};

export default Topics;