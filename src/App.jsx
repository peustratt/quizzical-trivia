import React, {useState, useEffect} from 'react';
import ActionBtn from './components/actionBtn/ActionBtn';
import Question from './components/question/Question';
import { nanoid } from 'nanoid'
import shuffleArray from './utils';

function App() {
  const [allQuestions, setAllQuestions] = useState([])
  const [gameIsOver, setGameIsover] = useState(() => false)

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
    .then(resp => resp.json())
    .then(data => setAllQuestions(
        data.results.map((question) => {
            return {
                key: nanoid(),
                question: question.question,
                type: question.type,
                correctAnswer: question.correct_answer,
                options: shuffleArray([
                    ...question.incorrect_answers,
                    question.correct_answer,
                ]),
                isCorrect: false,
            };
        })
    ));
  },[])

  function endGame() {
    setGameIsover(true)
  }

  const allQuestionsEl = allQuestions.map(question => {
    return (
        <Question
            key={question.key}
            question={question.question}
            type={question.type}
            correctAnswer={question.correct_answer}
            options={question.options}
            isCorrect={question.isCorrect}
            gameIsOver={gameIsOver}
        />
    );
  })

  return (
      <main>
          {allQuestionsEl}
          <ActionBtn endGame={endGame} />
      </main>
  );
}

export default App;