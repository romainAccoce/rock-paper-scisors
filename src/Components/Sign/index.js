import './sign.scss';

import PropTypes from 'prop-types';

const Sign = ({sign}) => {

    return (
        <div className={`sign sign--${sign.name}`} key={sign.name} >
            <div className= {sign.name ? 'sign__image-container' : 'sign__image-container--empty'}>
                <img className= {sign.name ? 'sign__image-container__icon' : 'sign__image-container__icon--empty'} src={sign.icon}/>
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