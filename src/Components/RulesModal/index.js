import './rulesModal.scss';

import { useDispatch } from 'react-redux';
import { displayRulesModal } from '../../action/displayOptions';

import rulesImage from '../../assets/images/image-rules.svg';

const RulesModal = () => {
    const dispatch = useDispatch();

    return (
        <div className='rules-modal'>
            <img className='rules-modal__image' alt='rules description image' src={rulesImage} />
            <button className='rules-modal__button' onClick={ () => dispatch(displayRulesModal()) }>+</button>
        </div>
    );
};

export default RulesModal;