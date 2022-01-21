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
}

export const findHouseChoice = () => {
    const choice = getRandomInt(signs.length);
    console.log(signs[choice]);
    return signs[choice];
}

export const compareResults = (playerSign, computerSign) => {
  console.log( "PlayerSign = "+ playerSign, "computerSign = " + computerSign);

  if (playerSign === computerSign) {
      return "it's a draw";
  } else if ((playerSign === 'rock' && computerSign === 'scissors') || (playerSign === 'paper' && computerSign === 'rock') || (playerSign === 'scissors' && computerSign === 'paper')) {
      return "you win";
  } else {
      return "you lose"
  };
}