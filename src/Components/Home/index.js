import './home.scss';

import Sign from '../Sign';
import triangleBackground from '../../assets/images/bg-triangle.svg';
import pentagonBackground from '../../assets/images/bg-pentagon.svg';

import { useDispatch, useSelector } from 'react-redux';
import { selectIcon } from '../../action/game';



const Home = () => {

    const dispatch = useDispatch();
    const { hardMode, signs, signsHardMode } = useSelector((state) => state.game);

    return (
        <div className={hardMode ? 'home home--hard-mode' : 'home'}>
            <img className='home__background' src={hardMode ? pentagonBackground : triangleBackground } alt={'background'} />
            {   
                (hardMode ? signsHardMode : signs).map(
                    (sign) => (
                        <div key={sign.name} className={hardMode ? `home__sign home__sign--hard-mode home__sign--${sign.name} home__sign--${sign.name}--hard-mode` : `home__sign home__sign--${sign.name}`} onClick={() => dispatch(selectIcon(sign))}> 
                            <Sign sign={sign} key={sign.name}/>
                        </div>
                    ),
                )
            }
        </div>
    );
};

export default Home;


