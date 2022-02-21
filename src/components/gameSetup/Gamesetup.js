const options = [
    {
        value: 'any',
        text: 'Any Category'
    },
    {
        value: '9',
        text: 'General Knowledge'
    },
    {
        value: '10',
        text: 'Entertainment: Books'
    },
    {
        value: '11',
        text: 'Entertainment: Film'
    },
    {
        value: '12',
        text: 'Entertainment: Music'
    },
    {
        value: '13',
        text: 'Entertainment: Musicals &amp; Theatres'
    },
    {
        value: '14',
        text: 'Entertainment: Television'
    },
    {
        value: '15',
        text: 'Entertainment: Video Games'
    },
    {
        value: '16',
        text: 'Entertainment: Board Games'
    },
    {
        value: '17',
        text: 'Science &amp; Nature'
    },
    {
        value: '18',
        text: 'Science: Computers'
    },
    {
        value: '19',
        text: 'Science: Mathematics'
    },
    {
        value: '20',
        text: 'Mythology'
    },
    {
        value: '21',
        text: 'Sports'
    },
    {
        value: '22',
        text: 'Geography'
    },
    {
        value: '23',
        text: 'History'
    },
    {
        value: '24',
        text: 'Politics'
    },
    {
        value: '25',
        text: 'Arts'
    },
    {
        value: '26',
        text: 'Celebritie'
    },
    {
        value: '27',
        text: 'Animals'
    },
    {
        value: '28',
        text: 'Vehicles'
    },
    {
        value: '29',
        text: 'Entertainment: Comics'
    },
    {
        value: '30',
        text: 'Science: Gadgets'
    },
    {
        value: '31',
        text: 'Entertainment: Japanese Anime &amp; Manga'
    },
    {
        value: '32',
        text: 'Entertainment: Cartoon &amp; Animations'
    }

]

export default function GameSetup({ apiUrl, handleApiUrl }) {
    const optionsDifficulty = options.map(option => (
        <option
            key={option.value}
            value={option.value}
            >
            {option.text}
        </option>))

    return (
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
                <select onChange={handleApiUrl} value={apiUrl.category} name="category" className="form-control">
                    {optionsDifficulty}
                </select>
            </div>

            <div className="input-box">
                <label htmlFor="difficulty">Select Difficulty:</label>
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
    )
}