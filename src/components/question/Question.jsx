import React from 'react';
import Option from '../option/Option';


function Question() {
    return (
        <div className="question-box">
            <h2 className="question-title">
                How would one say goodbye in Spanish?
            </h2>
            <div className="options">
                <Option />
                <Option />
                <Option />
                <Option />
                <Option />
            </div>
        </div>
    );
}

export default Question;
