import { SELECT_ICON, COMPUTER_PLAY } from "../action/game";

const initialState = {
  playerChoice: '',
  computerChoice: '',
  score: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
      case  SELECT_ICON:
      return {
        ...state,
        playerChoice: action.value,
      }
    default:
      return state;
  }
};

export default reducer;