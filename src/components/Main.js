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

    function handleChange (event) {
        //event.preventDefault()
        var {name, type, value, checked} = event.target;

        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    const titleMod = title.toUpperCase();

    return (
        <main className="main">
            <form action="#" className="generator-form">
                <input
                    type="text"
                    name="topText"
                    placeholder="Top line"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom line"
                    onChange={handleChange}
                />
                <button type="button"
                    className="generate-button"
                    onClick={getMemeImage}
                    >
                        {titleMod}
                </button>
            </form>
            <div className="meme">
                <img src={meme.memeImage} alt='Meme' className='meme-image' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}

export default Main;
