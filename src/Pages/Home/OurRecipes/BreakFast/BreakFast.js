import React from 'react';

const BreakFast = ({ breakfast }) => {
    return (
        <div id="breakFast">
            <h1>{breakfast.name}</h1>
        </div>
    );
};

export default BreakFast;