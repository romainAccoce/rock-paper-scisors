import './footer.scss';

import { useDispatch } from 'react-redux';
import { displayRulesModal } from '../../action/displayOptions';

const Footer = () => {
    const dispatch = useDispatch();

    return (
        <button className="rules" onClick={() => dispatch(displayRulesModal())}>rules</button>
    )
}

export default Footer;