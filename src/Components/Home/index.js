import './home.scss';
import background from '../../assets/images/bg-triangle.svg';
import rockIcon from '../../assets/images/icon-rock.svg';
import paperIcon from '../../assets/images/icon-paper.svg';
import scissorsIcon from '../../assets/images/icon-scissors.svg';

const Home = () => {

    const signes = [
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
        <div className='home-container'>
            <img className="home-container__background" src={background} alt='triangle'/>
            {
              signes.map(
                (signe) => (
                  <div className={`home-container__signe home-container__signe--${signe.name}`} key={signe.name}>
                   <img className='home-container__signe__image' src={signe.icon}/>
                  </div>
                ),
                )
            }
        </div>
    );
};

export default Home;


