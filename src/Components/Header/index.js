import './header.scss';

import logo from '../../assets/images/logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <img className='header__logo' alt="rock paper scissors logo" src={logo} />

            <div className='header__score-container'>
                <h2 className='header__score-container__title'>score</h2>
                <div className='header__score-container__score'>12</div>
            </div>
        </div>
    );
};

export default Header;