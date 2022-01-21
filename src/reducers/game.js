import { SELECT_ICON, COMPUTER_PLAY, SET_WINNER, RESET_CHOICES, DISPLAY_WINNER_BOX } from "../action/game";

const initialState = {
  playerChoice: null,
  computerChoice: {},
  score: 0,
  setWinner: '',
  showWinnerBox: false,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
      case  SELECT_ICON:
      return {
        ...state,
        playerChoice: action.value,
      };
      case  COMPUTER_PLAY:
      return {
        ...state,
        computerChoice: action.value,
      };
      case  SET_WINNER:
      return {
        ...state,
        setWinner: action.value,
      };
      case  DISPLAY_WINNER_BOX:
      return {
        ...state,
        showWinnerBox: !state.showWinnerBox,
      };

      case  RESET_CHOICES:
      return {
        ...state,
        playerChoice: null,
        computerChoice: {},
        showWinnerBox: !state.showWinnerBox,

      };
      default:
      return state;
  }
};

export default reducer;