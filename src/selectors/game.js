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
    return signs[choice];
}