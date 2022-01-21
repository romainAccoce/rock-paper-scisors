import './result.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sign from '../Sign';

import { findHouseChoice } from '../../selectors/game';
import { computerPlay } from '../../action/game';

const Result = () => {
    
    const dispatch = useDispatch();
    const houseChoice = findHouseChoice()
    const { playerChoice, computerChoice } = useSelector((state) => state.game);
    
    useEffect(() => {
        dispatch(computerPlay(houseChoice));
        // const timer = setTimeout(() => {
        // }, 1000);
        // return () => clearTimeout(timer);
    }, []);

    return (
        <div className='result'>
            <div className="result__sign-container">
                <p className="result__sign-container__text">you picked</p>
                <div className="result__sign-container__icon">
                    <Sign sign={playerChoice} />
                </div>
            </div>
            <div className="result__sign-container">
                <div className="result__sign-container__background"></div>
                <p className="result__sign-container__text">the house picked</p>
                <div className="result__sign-container__icon result__sign-container__icon--house">
                    { houseChoice && <Sign sign={computerChoice} /> } 
                </div>
            </div>
        </div>
    );
};

export default Result;