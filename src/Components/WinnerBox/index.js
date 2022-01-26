import './winner-box.scss';

import { useSelector, useDispatch } from 'react-redux';
import { resetChoices } from '../../action/game';

const WinnerBox = () => {
    const dispatch = useDispatch();
    const { winner } = useSelector((state) => state.game);


    return (
        <div className='winner-box'>
            <p className='winner-box__text'>{winner}</p>
            <div className='winner-box__button' onClick={() => dispatch(resetChoices())}>play again</div>
        </div>
    );
};

export default WinnerBox;