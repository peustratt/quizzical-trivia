export const options = [
    {
        value: 'any',
        text: 'Any Category',
        bgUrl: './images/movies.jpg'
    },
    {
        value: '9',
        text: 'General Knowledge',
        bgUrl: ""
    },
    {
        value: '10',
        text: 'Entertainment: Books',
        bgUrl: ""
    },
    {
        value: '11',
        text: 'Entertainment: Film',
        bgUrl: "./images/movies.jpg"
    },
    {
        value: '12',
        text: 'Entertainment: Music',
        bgUrl: ""
    },
    {
        value: '13',
        text: 'Entertainment: Musicals & Theatres',
        bgUrl: ""
    },
    {
        value: '14',
        text: 'Entertainment: Television',
        bgUrl: ""
    },
    {
        value: '15',
        text: 'Entertainment: Video Games',
        bgUrl: ""
    },
    {
        value: '16',
        text: 'Entertainment: Board Games',
        bgUrl: ""
    },
    {
        value: '17',
        text: 'Science &amp; Nature',
        bgUrl: ""
    },
    {
        value: '18',
        text: 'Science: Computers',
        bgUrl: ""
    },
    {
        value: '19',
        text: 'Science: Mathematics',
        bgUrl: ""
    },
    {
        value: '20',
        text: 'Mythology',
        bgUrl: ""
    },
    {
        value: '21',
        text: 'Sports',
        bgUrl: ""
    },
    {
        value: '22',
        text: 'Geography',
        bgUrl: ""
    },
    {
        value: '23',
        text: 'History',
        bgUrl: ""
    },
    {
        value: '24',
        text: 'Politics',
        bgUrl: ""
    },
    {
        value: '25',
        text: 'Arts',
        bgUrl: ""
    },
    {
        value: '26',
        text: 'Celebritie',
        bgUrl: ""
    },
    {
        value: '27',
        text: 'Animals',
        bgUrl: ""
    },
    {
        value: '28',
        text: 'Vehicles',
        bgUrl: ""
    },
    {
        value: '29',
        text: 'Entertainment: Comics',
        bgUrl: ""
    },
    {
        value: '30',
        text: 'Science: Gadgets',
        bgUrl: ""
    },
    {
        value: '31',
        text: 'Entertainment: Japanese Anime & Manga',
        bgUrl: ""
    },
    {
        value: '32',
        text: 'Entertainment: Cartoon & Animations',
        bgUrl: ""
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