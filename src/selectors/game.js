import rockIcon from '../assets/images/icon-rock.svg';
import paperIcon from '../assets/images/icon-paper.svg';
import scissorsIcon from '../assets/images/icon-scissors.svg';

export const signs = [
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

export const findPlayerSign = (playerChoice) => {
    const result = signs.find((sign) => sign.name === playerChoice);
    return result;
};