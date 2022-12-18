import './Main.css';
import React from 'react';
import memesData from '../memesData';

function Main () {
    const title = "Get a new meme image 🖼";

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setMemeImages] = React.useState(memesData);
    
    function getMemeImage (e) {
        e.preventDefault();

        var meme = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)];

        setMeme((prevMeme) => ({
            ...prevMeme,
            memeImage: meme.url
        }));

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
            {meme &&
                <img src={meme.memeImage} alt='Meme' className='meme-image' />}
        </main>
    );
}

export default Main;