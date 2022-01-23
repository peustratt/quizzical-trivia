import React from 'react';

function Option({ option, correctAnswer, handleCLick, selectedOption, gameIsOver }) {
    let  style = null
    if (gameIsOver) {
        if (option === correctAnswer)
        style = {
            backgroundColor: "#94D7A2",
        };
        if (option === selectedOption && selectedOption != correctAnswer) {
            style = {
                backgroundColor: "#F8BCBC",
                opacity: .5
            };
        }
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
