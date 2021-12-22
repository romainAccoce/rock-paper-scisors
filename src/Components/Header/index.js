import './header.scss';

const Header = () => {
    return (
        <div className='header'>
            <h1 className='header__title'>
                rock <br />
                paper <br />
                scissors
            </h1>
            <div className='header__score-container'>
                <h2 className='header__score-container__title'>score</h2>
                <div className='header__score-container__score'>12</div>
            </div>
        </div>
    );
};

export default Header;