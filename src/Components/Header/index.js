import './header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetScore, setScore } from '../../action/game';

import logo from '../../assets/images/logo.svg';
import logoHardMode from '../../assets/images/logo-bonus.svg'

const Header = () => {

    const dispatch = useDispatch();
    const { score, hardMode } = useSelector((state) => state.game);

    useEffect(() => {
        dispatch(setScore(JSON.parse(localStorage.getItem('scoreLS'))));
    }, []);

    useEffect(() => {
        localStorage.setItem('scoreLS', JSON.stringify(score));
    }, [score]);


    return (
        <div className='header'>
            <img className='header__logo' alt="rock paper scissors logo" src={hardMode ? logoHardMode : logo} />

            <div className='header__score-container' onClick={() => dispatch(resetScore())}>
                <p className='header__score-container__title'>score</p>
                <div className='header__score-container__score'>{score}</div>
                <p className='header__score-container__text'>press to reset</p>
            </div>
        </div>
    );
};

export default Header;