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