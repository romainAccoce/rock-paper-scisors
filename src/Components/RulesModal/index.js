import './rulesModal.scss';

import { useDispatch } from 'react-redux';
import { displayRulesModal } from '../../action/displayOptions';

import rulesImage from '../../assets/images/image-rules.svg';

const RulesModal = () => {
    const dispatch = useDispatch();

    return (
        <div className='rules-modal'>
            <div className='rules-modal__header'>
                <h2 className='rules-modal__header__title'>rules</h2>
                <button className='rules-modal__header__button' onClick={ () => dispatch(displayRulesModal()) }>+</button>
            </div>   
            <img className='rules-modal__image' alt='rules description image' src={rulesImage} />
        </div>
    );
};

export default RulesModal;