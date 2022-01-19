import './home.scss';

import Sign from '../Sign';
import { signs } from '../../selectors/game';

import triangleImage from '../../assets/images/bg-triangle.svg'

const Home = () => {

    return (
        <div className='home'>
            <img className='home__background' src={triangleImage} />
            {   
                signs.map(
                    (sign) => (
                        <div className={`home__sign home__sign--${sign.name}`}>
                            <Sign sign={sign} key={sign.name}/>
                        </div>
                    ),
                    )
                }
            </div>
    );
};

export default Home;


