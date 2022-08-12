import React from 'react';

function Error(props) {
    return (
        <div className='error'>
            <h2>{props.title}</h2>
            <p>Something went wrong, {props.msg}</p>
        </div>
    );
}

export default Error;