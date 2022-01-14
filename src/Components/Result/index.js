import './result.scss';

import Sign from '../Sign';
import { signs } from '../../selectors/game';

import { findPlayerSign } from '../../selectors/game';

const Result = ({playerChoice}) => {
    return (
        <div className={`home__icons__sign--${playerChoice}`}>
            <Sign sign={findPlayerSign(playerChoice)} />
        </div>
    )
}

export default Result;