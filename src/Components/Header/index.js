import './header.scss';
import { useSelector } from 'react-redux';

import logo from '../../assets/images/logo.svg';
import logoHardMode from '../../assets/images/logo-bonus.svg'

const Header = () => {

    const { score, hardMode } = useSelector((state) => state.game);

    return (
        <div className='header'>
            <img className='header__logo' alt="rock paper scissors logo" src={hardMode ? logoHardMode : logo} />

            <div className='header__score-container'>
                <h2 className='header__score-container__title'>score</h2>
                <div className='header__score-container__score'>{score}</div>
            </div>
        </div>
    );
};

export default Header;