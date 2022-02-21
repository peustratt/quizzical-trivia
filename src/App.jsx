import React, {useState, useEffect} from 'react';
import ActionBtn from './components/actionBtn/ActionBtn';
import Question from './components/question/Question';
import { nanoid } from 'nanoid'
import shuffleArray, {parseHtml} from './utils';

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
    type: 'any'
  })


  useEffect(() => {
    console.log(apiUrl)
    console.log(convertApiToString(apiUrl));
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
    setApiUrl((prevUrl) => ({...prevUrl, [name]: value}))
  }

  function convertApiToString(apiObject) {
    let urlString  = ""
    for (let key of Object.keys(apiObject)) {
      let valor = apiObject[key];
      if (key == 'amount') {
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

  return (
      <main>
          {hasStarted && allQuestionsEl}
          {hasStarted && (
              <div className="box">
                  {gameIsOver && (
                      <p className="acertos">{`Você acertou ${answerCount}/${apiUrl.amount}`}</p>
                  )}
                  <ActionBtn handleGame={handleGame} gameIsOver={gameIsOver} />
              </div>
          )}
          {!hasStarted && (
              <>
                  <h1>Quizzical</h1>
                  <div className="choices">
                      <div className="input-box">
                          <label htmlFor="trivia_amount">
                              Number of Questions:
                          </label>
                          <input
                              onChange={handleApiUrl}
                              value={apiUrl.amount}
                              type="number"
                              name="amount"
                              id="trivia_amount"
                              className="form-control"
                          ></input>
                      </div>
                      <div className="input-box">
                          <label htmlFor="category">Select Category: </label>
                          <select
                              onChange={handleApiUrl}
                              value={apiUrl.category}
                              name="category"
                              className="form-control"
                          >
                              <option value="any">Any Category</option>
                              <option value="9">General Knowledge</option>
                              <option value="10">Entertainment: Books</option>
                              <option value="11">Entertainment: Film</option>
                              <option value="12">Entertainment: Music</option>
                              <option value="13">
                                  Entertainment: Musicals &amp; Theatres
                              </option>
                              <option value="14">
                                  Entertainment: Television
                              </option>
                              <option value="15">
                                  Entertainment: Video Games
                              </option>
                              <option value="16">
                                  Entertainment: Board Games
                              </option>
                              <option value="17">Science &amp; Nature</option>
                              <option value="18">Science: Computers</option>
                              <option value="19">Science: Mathematics</option>
                              <option value="20">Mythology</option>
                              <option value="21">Sports</option>
                              <option value="22">Geography</option>
                              <option value="23">History</option>
                              <option value="24">Politics</option>
                              <option value="25">Art</option>
                              <option value="26">Celebrities</option>
                              <option value="27">Animals</option>
                              <option value="28">Vehicles</option>
                              <option value="29">Entertainment: Comics</option>
                              <option value="30">Science: Gadgets</option>
                              <option value="31">
                                  Entertainment: Japanese Anime &amp; Manga
                              </option>
                              <option value="32">
                                  Entertainment: Cartoon &amp; Animations
                              </option>
                          </select>
                      </div>
                      <div className="input-box">
                          <label htmlFor="difficulty">
                              Select Difficulty:
                          </label>
                          <select onChange={handleApiUrl} value={apiUrl.difficulty} name="difficulty" className="form-control">
                              <option value="any">Any Difficulty</option>
                              <option value="easy">Easy</option>
                              <option value="medium">Medium</option>
                              <option value="hard">Hard</option>
                          </select>
                      </div>
                      <div className='input-box'>
                        <label htmlFor="type">Select Type: </label>
                        <select onChange={handleApiUrl} value={apiUrl.type} name="type" className="form-control">&gt;
                          <option value="any">Any Type</option>
                          <option value="multiple">Multiple Choice</option>
                          <option value="boolean">True / False</option>
                        </select>
                      </div>
                  </div>
                  <ActionBtn startBtn="start-btn" handleGame={startGame} />
              </>
          )}
      </main>
  );
}

export default App;