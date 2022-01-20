import './result.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sign from '../Sign';

import { findSign, findHouseChoice } from '../../selectors/game';
import { computerPlay } from '../../action/game';

const Result = () => {
    
    const dispatch = useDispatch();
    const houseChoice = findHouseChoice()
    const { playerChoice, computerChoice } = useSelector((state) => state.game);
    
    useEffect(() => {
    dispatch(computerPlay(houseChoice));
    }, [playerChoice]);

    return (
        <div className='result'>
            <div className="result__sign-container">
                <p className="result__sign-container__text">you picked</p>
                <Sign className="result__sign-container__icon" sign={playerChoice} />
            </div>
            <div className="result__sign-container">
                <p className="result__sign-container__text">the house picked</p>
                <Sign className="result__sign-container__icon" sign={computerChoice} />
            </div>
        </div>

    );
};

export default Result;