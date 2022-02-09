import rockIcon from '../assets/images/icon-rock.svg';
import paperIcon from '../assets/images/icon-paper.svg';
import scissorsIcon from '../assets/images/icon-scissors.svg';
import lizardIcon from '../assets/images/icon-lizard.svg';
import spockIcon from '../assets/images/icon-spock.svg';


import { SELECT_ICON, COMPUTER_PLAY, SET_WINNER, RESET_CHOICES, DISPLAY_WINNER_BOX, SET_SCORE, SET_HARD_MODE, RESET_SCORE } from "../action/game";

const initialState = {
  playerChoice: null,
  computerChoice: {},
  score: 0,
  winner: '',
  showWinnerBox: false,
  hardMode: false,
  signs: [
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
  ],
  signsHardMode: [
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
    {
        name: 'lizard',
        icon: lizardIcon,
    },
        {
        name: 'spock',
        icon: spockIcon,
    },
  ],
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
        winner: action.value,
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
      case  SET_SCORE:
      return {
        ...state,
        score: state.score + action.value,
      };
      case  SET_HARD_MODE:
      return {
        ...state,
        hardMode: action.value,
      };
      case  RESET_SCORE:
      return {
        ...state,
        score: 0,
      };
      default:
      return state;
      
  }
};

export default reducer;