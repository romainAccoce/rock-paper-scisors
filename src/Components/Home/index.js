import './home.scss';

import Sign from '../Sign';

import { useSelector } from 'react-redux';

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

    const findPlayerSign = (playerChoice) => {
        const result = signs.find((sign) => sign.name == playerChoice);
        return result;
    };

    const { playerChoice } = useSelector((state) => state.game);


    return (
        <div className='home'>
            <img className='home__background' src={background} alt='triangle'/>

            <div className='home__icons'>
                {   
                    (!playerChoice) && (
                        signs.map(
                            (sign) => (
                                <div className={`home__icons__sign--${sign.name}`}>
                                    <Sign sign={sign} key={sign.name}/>
                                </div>
                            ),
                        )
                    )
                }

                {
                    (playerChoice) && (
                        <div className={`home__icons__sign--${playerChoice}`}>
                            <Sign sign={signs.find((sign) => sign.name == playerChoice)} />
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Home;


