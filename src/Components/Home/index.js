import './home.scss';

import Sign from '../Sign';
import { signs } from '../../selectors/game';

import background from '../../assets/images/bg-triangle.svg';

const Home = () => {

    return (
        <div className='home'>
            <img className='home__background' src={background} alt='triangle'/>

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

                {/* {
                    (playerChoice) && (
                        <div className={`home__icons__sign--${playerChoice}`}>
                            <Sign sign={signs.find((sign) => sign.name === playerChoice)} />
                        </div>
                    )
                } */}

            </div>
        </div>
    );
};

export default Home;


