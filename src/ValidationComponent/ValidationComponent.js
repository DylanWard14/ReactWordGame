import React from 'react';

const ValidationComponent = (props) => {
    if(props.textLength < 5) {
        return <p>Text too short!</p>
    }
    else
    {
        return <p>Text long enough</p>
    }
};

export default ValidationComponent;