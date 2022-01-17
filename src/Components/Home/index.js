import './home.scss';

import Sign from '../Sign';
import { signs } from '../../selectors/game';

const Home = () => {

    return (
        <div className='home'>
            <div className='home__icons'>
                {   
                    signs.map(
                        (sign) => (
                            <div className={`home__icons__sign--${sign.name}`}>
                                <Sign sign={sign} key={sign.name}/>
                            </div>
                        ),
                        )
                    }
            </div>
        </div>
    );
};

export default Home;


