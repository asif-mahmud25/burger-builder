import React from 'react';

const ErrorMessage = (props) => {
    return(
        <div>
            <p>Something went wrong!</p>
            <button onClick={props.exitError}>OK</button>
        </div>
    )
};

export default ErrorMessage;