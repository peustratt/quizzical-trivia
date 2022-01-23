import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Option from '../option/Option';


function Question({ question, correctAnswer, gameIsOver, options, handleIsCorrect }) {

    const [selectedOption, setSelectedOption] =  useState(() => options[0])

    useEffect(() => {
        if (gameIsOver && correctAnswer === selectedOption) {
            handleIsCorrect()
        }
    }, [gameIsOver])

    function handleClick(option) {
        !gameIsOver && setSelectedOption(option)
    }

    const optionsEl = options.map((option, index) => (
        <Option
            key={index}
            option={option}
            correctAnswer={correctAnswer}
            handleCLick={() => handleClick(option)}
            selectedOption={selectedOption}
            gameIsOver={gameIsOver}
        />
    ));

    return (
        <div className="question-box">
            <h2 className="question-title">{question}</h2>
            <div className="options">
                {optionsEl}
            </div>
        </div>
    );
}

export default Question;
