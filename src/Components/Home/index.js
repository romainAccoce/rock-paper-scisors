import './home.scss';

import Sign from '../Sign';
import { signs, signsHardMode, findHouseChoice } from '../../selectors/game';
import triangleBackground from '../../assets/images/bg-triangle.svg';
import pentagonBackground from '../../assets/images/bg-pentagon.svg';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIcon, computerPlay } from '../../action/game';



const Home = () => {

  const dispatch = useDispatch();
  const houseChoice = findHouseChoice()
  const { playerChoice, hardMode } = useSelector((state) => state.game);

  useEffect(() => {
    dispatch(computerPlay(houseChoice));
  }, [playerChoice]);


    return (
        <div className='home'>
            <img className='home__background' src={hardMode ? pentagonBackground : triangleBackground } />
            {   
                (hardMode ? signsHardMode : signs).map(
                    (sign) => (
                        <div className={hardMode ? `home__sign home__sign--${sign.name} home__sign home__sign--${sign.name}--hard-mode` : '`home__sign home__sign--${sign.name}'} onClick={() => dispatch(selectIcon(sign))}> 
                            <Sign sign={sign} key={sign.name}/>
                        </div>
                    ),
                )
            }
            </div>
    );
};

export default Home;


