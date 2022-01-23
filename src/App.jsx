import React, {useState, useEffect} from 'react';
import ActionBtn from './components/actionBtn/ActionBtn';
import Question from './components/question/Question';
import { nanoid } from 'nanoid'
import shuffleArray from './utils';

function App() {
  const [allQuestions, setAllQuestions] = useState([])
  const [gameIsOver, setGameIsover] = useState(() => false)
  const [answerCount, setAnswerCount] = useState(0)
  const [restartGame, setRestartGame] = useState(0)

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
                ])
            };
        })
    ));
  },[restartGame])

  function handleGame() {
    if (!gameIsOver) {
      setGameIsover(true);
    } else {
      setGameIsover(false)
      setAnswerCount(0)
      setRestartGame(Math.random())
    }
  }

  function handleIsCorrect() {
    console.log(answerCount)
    setAnswerCount(prevCount => prevCount + 1)
  }

  const allQuestionsEl = allQuestions.map(question => {
    return (
        <Question
            key={question.key}
            question={question.question}
            type={question.type}
            correctAnswer={question.correctAnswer}
            options={question.options}
            gameIsOver={gameIsOver}
            handleIsCorrect={handleIsCorrect}
        />
    );
  })

  return (
      <main>
          {allQuestionsEl}
          <div className="box">
              {gameIsOver && <p>{`Você acertou ${answerCount}/5`}</p>}
              <ActionBtn handleGame={handleGame} gameIsOver={gameIsOver}/>
          </div>
      </main>
  );
}

export default App;