import './sign.scss';
import { useDispatch } from 'react-redux';
import { selectIcon } from '../../action/game';

import PropTypes from 'prop-types';

const Sign = ({sign}) => {
  const dispatch = useDispatch();

    return (
        <div className={`sign sign--${sign.name}`} key={sign.name} onClick={() => dispatch(selectIcon(sign.name))}>
            <div className='sign__image-container'>
                <img className='sign__image-container__icon' src={sign.icon}/>
            </div>
        </div>
    );
};

Sign.propTypes = {
  sign: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default Sign;