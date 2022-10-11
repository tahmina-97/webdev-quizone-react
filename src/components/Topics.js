import React, { useContext } from 'react';
import { TopicsContext } from './Root';

const Topics = () => {
    const topics = useContext(TopicsContext);

    return (
        <div>
            <h1>Topics length: {topics.length}</h1>

        </div>
    );
};

export default Topics;