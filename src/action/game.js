export const SELECT_ICON = 'SELECT_ICON';
export const selectIcon = (value) => (
  {
    type: SELECT_ICON,
    value,
  }
);

export const COMPUTER_PLAY = 'COMPUTER_PLAY';
export const computerPlay = (value) => (
  {
    type: COMPUTER_PLAY,
    value,
  }
);

export const SET_WINNER = 'SET_WINNER';
export const setWinner = (value) => (
  {
    type: SET_WINNER,
    value,
  }
);

export const DISPLAY_WINNER_BOX = 'DISPLAY_WINNER_BOX';
export const displayWinnerBox = () => (
  {
    type: DISPLAY_WINNER_BOX,
  }
);

export const RESET_CHOICES = 'RESET_CHOICES';
export const resetChoices = () => (
  {
    type: RESET_CHOICES,
  }
);

export const SET_SCORE = 'SET_SCORE';
export const setScore = (value) => (
  {
    type: SET_SCORE,
    value,
  }
);

export const SET_HARD_MODE = 'SET_HARD_MODE';
export const setHardMode = () => (
  {
    type: SET_HARD_MODE,
  }
);

