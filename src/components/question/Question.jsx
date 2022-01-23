import React, { useState } from 'react';
import shuffleArray from '../../utils';
import Option from '../option/Option';


function Question({ question, incorrectAnswers, correctAnswer}) {

    const [shuffledOptions, setShuffledOptions] = useState(() => shuffleArray([...incorrectAnswers, correctAnswer]));
    const [selectedOption, setSelectedOption] =  useState(shuffledOptions[0])

    function handleClick(option) {
        setSelectedOption(option)
    }

    const optionsEl = shuffledOptions.map((option, index) => (
        <Option
            key={index}
            option={option}
            correctAnswer={correctAnswer}
            handleCLick={() => handleClick(option)}
            selectedOption={selectedOption}
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
