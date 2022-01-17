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

export const findPlayerSign = (playerChoice) => {
    const result = signs.find((sign) => sign.name === playerChoice);
    return result;
};