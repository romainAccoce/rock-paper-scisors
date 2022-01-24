import './result.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sign from '../Sign';
import WinnerBox from '../WinnerBox';

import { compareResults, getNewScore } from '../../selectors/game';
import { displayWinnerBox, setWinner, setScore } from '../../action/game';

const Result = () => {
    
    const dispatch = useDispatch();
    const { playerChoice, computerChoice, showWinnerBox, winner, score } = useSelector((state) => state.game);
    
    useEffect(() => {
        dispatch(setWinner(compareResults(playerChoice.name, computerChoice.name)));
        const timer = setTimeout(() => {
            dispatch(displayWinnerBox());
            console.log(getNewScore(winner));
            dispatch(setScore(getNewScore(winner)));
        }, 1000);
        return () => clearTimeout(timer);
    }, [winner]);

    return (
        <div className='result'>
            <div className="result__sign-container">
                <p className="result__sign-container__text">you picked</p>
                <div className={((winner === "you win") && showWinnerBox) ? "result__sign-container__icon result__sign-container__icon--winner" : "result__sign-container__icon"}  >
                    <Sign sign={playerChoice} />
                </div>
            </div>
            {
                showWinnerBox && <WinnerBox />
            }
            <div className="result__sign-container">
                <div className="result__sign-container__background"></div>
                <p className="result__sign-container__text">the house picked</p>
                <div className={((winner === "you lose") && showWinnerBox) ? "result__sign-container__icon result__sign-container__icon--winner result__sign-container__icon--house" : "result__sign-container__icon result__sign-container__icon--house"} >
                    { computerChoice && <Sign sign={computerChoice} /> } 
                </div>
            </div>
        </div>
    );
};

export default Result;