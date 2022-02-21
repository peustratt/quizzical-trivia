export const options = [
    {
        value: 'any',
        text: 'Any Category',
        bgUrl: 'any.jpg'
    },
    {
        value: '9',
        text: 'General Knowledge',
        bgUrl: "general-knowledge.jpg"
    },
    {
        value: '10',
        text: 'Entertainment: Books',
        bgUrl: "books.jpg"
    },
    {
        value: '11',
        text: 'Entertainment: Film',
        bgUrl: "movies.jpg"
    },
    {
        value: '12',
        text: 'Entertainment: Music',
        bgUrl: "music.jpg"
    },
    {
        value: '13',
        text: 'Entertainment: Musicals & Theatres',
        bgUrl: "musicals-theatres.jpg"
    },
    {
        value: '14',
        text: 'Entertainment: Television',
        bgUrl: "television.jpg"
    },
    {
        value: '15',
        text: 'Entertainment: Video Games',
        bgUrl: "videos-games.jpg"
    },
    {
        value: '16',
        text: 'Entertainment: Board Games',
        bgUrl: "board-games.jpg"
    },
    {
        value: '17',
        text: 'Science & Nature',
        bgUrl: "science.jpg"
    },
    {
        value: '18',
        text: 'Science: Computers',
        bgUrl: "computers.jpg"
    },
    {
        value: '19',
        text: 'Science: Mathematics',
        bgUrl: "mathematics.jpg"
    },
    {
        value: '20',
        text: 'Mythology',
        bgUrl: "mythology.jpg"
    },
    {
        value: '21',
        text: 'Sports',
        bgUrl: "sports.jpg"
    },
    {
        value: '22',
        text: 'Geography',
        bgUrl: "geography.jpg"
    },
    {
        value: '23',
        text: 'History',
        bgUrl: "history.jpg"
    },
    {
        value: '24',
        text: 'Politics',
        bgUrl: "politics.jpg"
    },
    {
        value: '25',
        text: 'Arts',
        bgUrl: "arts.jpg"
    },
    {
        value: '26',
        text: 'Celebritie',
        bgUrl: "celebrities.jpg"
    },
    {
        value: '27',
        text: 'Animals',
        bgUrl: "animals.jpg"
    },
    {
        value: '28',
        text: 'Vehicles',
        bgUrl: "vehicles.jpg"
    },
    {
        value: '29',
        text: 'Entertainment: Comics',
        bgUrl: "comics.jpg"
    },
    {
        value: '30',
        text: 'Science: Gadgets',
        bgUrl: "gadgets.jpg"
    },
    {
        value: '31',
        text: 'Entertainment: Japanese Anime & Manga',
        bgUrl: "anime.jpg"
    },
    {
        value: '32',
        text: 'Entertainment: Cartoon & Animations',
        bgUrl: "cartoons.jpg"
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