import './footer.scss';

import { useDispatch, useSelector } from 'react-redux';
import { displayRulesModal } from '../../action/displayOptions';
import { setHardMode } from '../../action/game';

import ToggleButton from '../ToggleButton';

const Footer = () => {
    const dispatch = useDispatch();
      const { hardMode } = useSelector((state) => state.game);


    return (
        <div>
            <ToggleButton isOn={hardMode} handleToggle={() => dispatch(setHardMode())} />
            <div className="rules" onClick={() => dispatch(displayRulesModal())}>rules</div>
        </div>
    )
}

export default Footer;