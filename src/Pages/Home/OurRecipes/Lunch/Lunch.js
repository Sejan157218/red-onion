import React from 'react';

const Lunch = ({ lunch }) => {
    return (
        <div id="luanch">
            <h1>{lunch.name}</h1>
        </div>
    );
};

export default Lunch;