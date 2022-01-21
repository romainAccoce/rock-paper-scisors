import { SELECT_ICON, COMPUTER_PLAY } from "../action/game";

const initialState = {
  playerChoice: null,
  computerChoice: {},
  score: 0,
  win: false,
  draw: false,

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
    default:
      return state;
  }
};

export default reducer;