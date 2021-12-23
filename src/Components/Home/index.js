import './home.scss';
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
                            <div className={`home__icons__sign home__icons__sign--${sign.name}`} key={sign.name}>
                                <div className='home__icons__sign__image-container'>
                                    <img className='homer__icons__sign__image-container__icon' src={sign.icon}/>
                                </div>
                            </div>
                        ),
                    )
                }
            </div>
        </div>
    );
};

export default Home;


