import React, { useState } from 'react';

const Like = () => {
    const [count, setCount] = useState(0);

    const handleLike = () => {
        setCount(count + 1);
    };

    const handleDislike = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>Likes: {count}</h2>
            <button onClick={handleLike}>👍 Like</button>
            <button onClick={handleDislike}>👎 Dislike</button>
        </div>
    );
};

export default Like;
