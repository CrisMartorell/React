import React from 'react';

const Button = ({type, text, clickHandler}) => {
    return (
        <button className={type} onClick={clickHandler()}>
            <span>{text}</span>
        </button>
    )
}

export default Button;