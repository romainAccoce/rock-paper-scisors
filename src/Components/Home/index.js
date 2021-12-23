import './home.scss';
import background from '../../assets/images/bg-triangle.svg'

const Home = () => {
    const signes = ['rock', 'paper', 'scissors'];
    return (
        <div className='home-container'>
            <img className="home-container__background" src={background} alt='triangle'/>
            {
              signes.map(
                (signe) => (
                  <div className="home-container__signe" key={signe}>
                   {signe}
                  </div>
                ),
                )
            }
        </div>
    );
};

export default Home;


