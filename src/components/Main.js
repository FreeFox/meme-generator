import './Main.css';
import React from 'react';
import memesData from '../memesData';

function Main () {
    //const [title, setTitle] = React.useState("Get a new meme image 🖼");
    const title = "Get a new meme image 🖼";
    const [memeImage, setMemeImage] = React.useState("");
    
    function getMemeImage (e) {
        e.preventDefault();

        var meme = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)];

        //setTitle("Generating... 🖼");
        setMemeImage(meme.url);

        return false;
    }

    const titleMod = title.toUpperCase();

    return (
        <main className="main">
            <form action="#" className="generator-form">
                <input type="text" name="top_text" placeholder="Top line" />
                <input type="text" name="bottom_text" placeholder="Bottom line" />
                <button type="button"
                    className="generate-button"
                    onClick={getMemeImage}
                    >
                        {titleMod}
                </button>
            </form>
            {memeImage &&
                <img src={memeImage} alt='Meme' className='meme-image' />}
        </main>
    );
}

export default Main;