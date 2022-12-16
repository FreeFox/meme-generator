import './Main.css';

function Main () {
    return (
        <div className="main">
            <form action="#" className="generator-form">
                <div className="inputs">
                    <input type="text" name="up_text" placeholder="Up line" />
                    <input type="text" name="down_text" placeholder="Down line" />
                </div>
                <button type="submit" className="generate-button">Get a new meme image  🖼</button>
            </form>
        </div>
    );
}

export default Main;