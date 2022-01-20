import './home.scss';

import Sign from '../Sign';
import { signs } from '../../selectors/game';
import triangleImage from '../../assets/images/bg-triangle.svg';

import { useDispatch } from 'react-redux';
import { selectIcon } from '../../action/game';



const Home = () => {

  const dispatch = useDispatch();

    return (
        <div className='home'>
            <img className='home__background' src={triangleImage} />
            {   
                signs.map(
                    (sign) => (
                        <div className={`home__sign home__sign--${sign.name}`} onClick={() => dispatch(selectIcon(sign))}> 
                            <Sign sign={sign} key={sign.name}/>
                        </div>
                    ),
                    )
                }
            </div>
    );
};

export default Home;


