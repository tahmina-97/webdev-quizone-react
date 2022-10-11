import React, { useContext } from 'react';
import { TopicsContext } from './Root';
import Topic from './Topic';

const Topics = () => {
    const topics = useContext(TopicsContext);

    return (
        <div>
            <h1 className='text-center'>Quiz on Fundamental Topics</h1>
            {
                topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }

        </div>
    );
};

export default Topics;