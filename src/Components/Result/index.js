import './result.scss';

import Sign from '../Sign';

import { findPlayerSign } from '../../selectors/game';

const Result = ({playerChoice}) => {
    return (
        <div className='result'>
            <div className="result__sign-container">
                <p className="result__sign-container__text">you picked</p>
                <Sign className="result__sign-container__icon" sign={findPlayerSign(playerChoice)} />
            </div>
            <div className="result__sign-container">
                <p className="result__sign-container__text">the house picked</p>
                <Sign className="result__sign-container__icon" sign={findPlayerSign(playerChoice)} />
            </div>
        </div>

    );
};

export default Result;