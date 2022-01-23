import React, {useState, useEffect} from 'react';
import ActionBtn from './components/actionBtn/ActionBtn';
import Question from './components/question/Question';
import { nanoid } from 'nanoid'

function App() {
  const [allQuestions, setAllQuestions] = useState([])
  const [gameIsOver, setGameIsover] = useState(false)

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
    .then(resp => resp.json())
    .then(data => setAllQuestions(data.results));
  },[])


  
  const allQuestionsEl = allQuestions.map(data => {

    return (
      <Question 
        key={nanoid()}
        question={data.question}
        type={data.type}
        correctAnswer={data.correct_answer}
        incorrectAnswers={data.incorrect_answers}
      />
    )
  })

  return (
      <main>
          {allQuestionsEl}
          <ActionBtn />
      </main>
  );
}

export default App;