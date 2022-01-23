import React, {useState, useEffect} from 'react';
import ActionBtn from './components/actionBtn/ActionBtn';
import Question from './components/question/Question';
import { nanoid } from 'nanoid'
import shuffleArray from './utils';

function App() {
  const [allQuestions, setAllQuestions] = useState([])
  const [gameIsOver, setGameIsover] = useState(() => false)
  const [answerCount, setAnswerCount] = useState(0)

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
  },[])

  console.log(allQuestions)

  function endGame() {
    setGameIsover(true)
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

  console.log(answerCount)

  return (
      <main>
          {allQuestionsEl}
          <ActionBtn endGame={endGame} />
      </main>
  );
}

export default App;