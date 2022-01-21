import { SELECT_ICON, COMPUTER_PLAY, SET_WINNER } from "../action/game";

const initialState = {
  playerChoice: null,
  computerChoice: {},
  score: 0,
  setWinner: '',
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

    default:
      return state;
  }
};

export default reducer;