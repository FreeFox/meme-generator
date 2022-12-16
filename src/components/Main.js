import './Main.css';

function Main () {
    return (
        <main className="main">
            <form action="#" className="generator-form">
                <input type="text" name="top_text" placeholder="Top line" />
                <input type="text" name="bottom_text" placeholder="Bottom line" />
                <button type="submit" className="generate-button">Get a new meme image  🖼</button>
            </form>
        </main>
    );
}

export default Main;