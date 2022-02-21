export default function StartPage() {
    return (
        <div className="start-page">
            <div action="" method="post" className="form-api">
                <h2 className="form-signin-heading">API Helper</h2>
                <label for="trivia_amount">Number of Questions:</label>
                <input type="number" name="trivia_amount" id="trivia_amount" className="form-control" min="1" max="50" value="10" />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Generate API URL</button>
            </div>
        </div>
    )
}