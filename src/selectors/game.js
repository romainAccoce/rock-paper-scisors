import rockIcon from '../assets/images/icon-rock.svg';
import paperIcon from '../assets/images/icon-paper.svg';
import scissorsIcon from '../assets/images/icon-scissors.svg';

export const signs = [
    {
        name: 'paper',
        icon: paperIcon,
    },
    {
        name: 'scissors',
        icon: scissorsIcon,
    },
    {
        name: 'rock',
        icon: rockIcon,
    },
];

export const findSign = (selection) => {
    const result = signs.find((sign) => sign.name === selection);
    return result;
};

export const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

export const findHouseChoice = () => {
    const choice = getRandomInt(signs.length);
    return signs[choice];
};

export const compareResults = (playerSign, computerSign) => {
  if (playerSign === computerSign) {
      return "it's a draw";
  } else if ((playerSign === 'rock' && computerSign === 'scissors') || (playerSign === 'paper' && computerSign === 'rock') || (playerSign === 'scissors' && computerSign === 'paper')) {
      return "you win";
  } else {
      return "you lose"
  };
};

export const getNewScore = (message) => {
    if (message === 'you win') {
        return 1;
    } else if (message === 'you lose') {
        return -1;
    } 
    else {
        return 0;
    };
};