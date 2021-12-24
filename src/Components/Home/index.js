import './home.scss';

import Sign from '../Sign';

import background from '../../assets/images/bg-triangle.svg';
import rockIcon from '../../assets/images/icon-rock.svg';
import paperIcon from '../../assets/images/icon-paper.svg';
import scissorsIcon from '../../assets/images/icon-scissors.svg';

const Home = () => {

    const signs = [
        {
            name: 'paper',
            icon: paperIcon,
        },
        {
            name: 'rock',
            icon: rockIcon,
        },
        {
            name: 'scissors',
            icon: scissorsIcon,
        },
    ];

    return (
        <div className='home'>
            <img className="home__background" src={background} alt='triangle'/>
            <div className='home__icons'>
                {
                    signs.map(
                        (sign) => (
                            <Sign sign={sign}/>
                        ),
                    )
                }
            </div>
        </div>
    );
};

export default Home;


