import React from 'react';

const Topic = ({ topic }) => {
    const { id, name } = topic;
    return (
        <div>
            <h1> some quizes {name} </h1>

        </div>
    );
};

export default Topic;