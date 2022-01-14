import './result.scss';

import Sign from '../Sign';

const Result = () => {
    return (
        <div className={`home__icons__sign--${playerChoice}`}>
            <Sign sign={signs.find((sign) => sign.name === playerChoice)} />
        </div>
    )
}

export default Result;