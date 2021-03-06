import React, {useState, useEffect} from 'react';
import ActionBtn from './components/actionBtn/ActionBtn';
import Question from './components/question/Question';
import { nanoid } from 'nanoid'
import shuffleArray, {parseHtml} from './utils';
import GameSetup from './components/gameSetup/Gamesetup';
import { options } from './components/gameSetup/Gamesetup';

function App() {
  const [allQuestions, setAllQuestions] = useState([])
  const [gameIsOver, setGameIsover] = useState(() => false)
  const [answerCount, setAnswerCount] = useState(0)
  const [restartGame, setRestartGame] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const [apiUrl, setApiUrl] = useState({
    amount: 5,
    category: 'any',
    difficulty: 'any',
    type: 'any',
    bg: "any.jpg",
  })

  console.log(apiUrl)


  useEffect(() => {
    // console.log(apiUrl)
    // console.log(convertApiToString(apiUrl));
    fetch("https://opentdb.com/api.php?" + convertApiToString(apiUrl))
    .then(resp => resp.json())
    .then(data => setAllQuestions(
        data.results.map((question) => {
            return {
                key: nanoid(),
                question: parseHtml(question.question),
                type: question.type,
                correctAnswer: parseHtml(question.correct_answer),
                options: shuffleArray([
                    ...question.incorrect_answers,
                    question.correct_answer,
                ])
            };
        })
    ));
  },[restartGame, hasStarted])

  function startGame() {
    setHasStarted(true)
  }

  function redefineSettings() {
    setHasStarted(false)
    setGameIsover(false)
    setAnswerCount(0)
  }

  function handleGame() {
    if (!gameIsOver) {
      setGameIsover(true);
    } else {
      setRestartGame(Math.random());
      setGameIsover(false)
      setAnswerCount(0)

    }
  }

  function handleIsCorrect() {
    setAnswerCount(prevCount => prevCount + 1)
  }

  function handleApiUrl(event) {
    const {name, value} = event.target
    if (name === 'amount' && value > 50) {
      value = 50
    } else if (name === 'amount' && value < 1) {
      value = 1
    }
    // If is category also change the background img
    if (name === 'category') {
      getImageUrl(value)
    }
    setApiUrl((prevUrl) => ({...prevUrl, [name]: value}))
  }

  function getImageUrl(value) {
    for (let item of options) {
        if (item.value === value) {
            console.log(item.bgUrl)
            setApiUrl((prevUrl) => ({ ...prevUrl, bg: item.bgUrl }));
        }
    }
  }

  function convertApiToString(apiObject) {
    let urlString  = ""
    for (let key of Object.keys(apiObject)) {
      let valor = apiObject[key];
      if (key === 'amount') {
          urlString += key + `=${valor}`
          
      } else {
        if (valor !== 'any') {
          urlString += `&${key}=${valor}`
        }
      }
    }

    return urlString
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

  // const mainStyle = apiUrl.bg ? { backgroundImage: `url(${apiUrl.bg})`} : {}


  return (
      <div className="page-body">
          {apiUrl.bg && <div className='img-wrapper'><img className="img-background" src={`./images/${apiUrl.bg}`} alt="background image"/></div>}
          <main>
              {hasStarted &&
                <>
                  {allQuestionsEl}
                  {gameIsOver && <p className="acertos">{`Voc?? acertou ${answerCount}/${apiUrl.amount}`}</p>}
                  <div className="box">
                        <ActionBtn
                            handleGame={handleGame}
                            gameIsOver={gameIsOver}
                        />
                        {gameIsOver && (
                            <ActionBtn
                                handleGame={redefineSettings}
                                startBtn="redefine"
                            />
                        )}
                  </div>
              </>
}
              {!hasStarted && (
                  <>
                      <h1>Quizzical</h1>
                      <GameSetup apiUrl={apiUrl} handleApiUrl={handleApiUrl} />
                      <ActionBtn startBtn="start-btn" handleGame={startGame} />
                  </>
              )}
          </main>
      </div>
  );
}

export default App;