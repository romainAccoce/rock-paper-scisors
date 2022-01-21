import './footer.scss';

import { useDispatch } from 'react-redux';
import { displayRulesModal } from '../../action/displayOptions';

const Footer = () => {
    const dispatch = useDispatch();

    return (
        <div className="rules" onClick={() => dispatch(displayRulesModal())}>rules</div>
    )
}

export default Footer;