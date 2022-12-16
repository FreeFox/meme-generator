import './Header.css';
import trollface from './images/Troll Face.png';

function Header () {
    return (
        <header className='header'>
            <div className='main-title'>
                <img src={trollface} className='trollface-img' alt='TrollFace' />
                Meme Generator
            </div>
            <div className='sub-title'>
                React Course - Project 3
            </div>
        </header>
    )
}

export default Header;