import { DISPLAY_RULES_MODAL, DISPLAY_WINNER_BOX } from "../action/displayOptions";

const initialState = {
  displayRules: false,
  showWinnerBox: false,
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case  DISPLAY_RULES_MODAL:
      return {
        ...state,
        displayRules: !state.displayRules,
      };
    case  DISPLAY_WINNER_BOX:
      return {
        ...state,
        showWinnerBox: !state.showWinnerBox,
      };

    default:
      return state;
  }
};

export default reducer;