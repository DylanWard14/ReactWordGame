import React from 'react';

const CharComponent = (props) => {
    var divStyle = {
        display: 'inline-block', 
        padding: '16px',
        textalign: 'center',
        margin: '16px',
        border: '1px solid black'
    }
    return (
        <div style={divStyle} onClick={props.click}>
            <p>{props.char}</p>
        </div>
    )
}

export default CharComponent;