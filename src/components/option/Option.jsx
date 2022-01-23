import React from 'react';

function Option({ option, correctAnswer, handleCLick, selectedOption }) {
    let  style = null
    if (option === correctAnswer) {
        style = {
            backgroundColor: "green",
        };
    } else {
        style = {
            backgroundColor: option === selectedOption ? "#D6DBF5" : "transparent",
        };
    }

    

    return (
        <button
            className="option__btn"
            style={style}
            onClick={handleCLick}
        >
            {option}
        </button>
    );
}

export default Option;
