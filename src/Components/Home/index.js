import './home.scss';

import Sign from '../Sign';
import { signs, findHouseChoice } from '../../selectors/game';
import triangleImage from '../../assets/images/bg-triangle.svg';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIcon, computerPlay } from '../../action/game';



const Home = () => {

  const dispatch = useDispatch();
  const houseChoice = findHouseChoice()
  const { playerChoice } = useSelector((state) => state.game);

  useEffect(() => {
    dispatch(computerPlay(houseChoice));
  }, [playerChoice]);


    return (
        <div className='home'>
            <img className='home__background' src={triangleImage} />
            {   
                signs.map(
                    (sign) => (
                        <div className={`home__sign home__sign--${sign.name}`} onClick={() => dispatch(selectIcon(sign))}> 
                            <Sign sign={sign} key={sign.name}/>
                        </div>
                    ),
                    )
                }
            </div>
    );
};

export default Home;


