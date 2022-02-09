export const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

export const findHouseChoice = (signsData) => {
    const choice = getRandomInt(signsData.length);
    return signsData[choice];
};

export const compareResults = (playerSign, computerSign) => {
  if (playerSign === computerSign) {
      return "it's a draw";
  } else if (
    (playerSign === 'rock' && computerSign === 'scissors')
    || 
    (playerSign === 'rock' && computerSign === 'lizard')
    || 
    (playerSign === 'paper' && computerSign === 'rock')
    || 
    (playerSign === 'paper' && computerSign === 'spock')
    || 
    (playerSign === 'scissors' && computerSign === 'paper')
    || 
    (playerSign === 'scissors' && computerSign === 'lizard')
    || 
    (playerSign === 'lizard' && computerSign === 'paper')
    || 
    (playerSign === 'lizard' && computerSign === 'spock')
    || 
    (playerSign === 'spock' && computerSign === 'scissors')
    || 
    (playerSign === 'spock' && computerSign === 'rock')
    ) {
      return "you win";
  } else {
      return "you lose";
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