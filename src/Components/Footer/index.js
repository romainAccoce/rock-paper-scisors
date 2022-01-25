import './footer.scss';

import { useDispatch, useSelector } from 'react-redux';
import { displayRulesModal } from '../../action/displayOptions';
import { setHardMode } from '../../action/game';

import ToggleButton from '../ToggleButton';

const Footer = () => {
    const dispatch = useDispatch();
      const { hardMode, playerChoice } = useSelector((state) => state.game);


    return (
        <div className='footer'>
            {
                !playerChoice &&
                <div className='footer__hard-mode-switch'>
                    <p>lizard spock</p>
                    <ToggleButton isOn={hardMode} handleToggle={() => dispatch(setHardMode())} />
                </div>
            }
            <div className="footer__rules" onClick={() => dispatch(displayRulesModal())}>rules</div>
        </div>
    )
}

export default Footer;