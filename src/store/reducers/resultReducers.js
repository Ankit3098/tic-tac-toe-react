import { X_WINS, O_WINS, TIE } from "../actionTypes/actionTypes";

const intialState = {
  win: null,
  tie: false,
};

export const resultReducer = (state = intialState, action) => {
  switch (action.type) {
    case X_WINS:
      return {
        win: "X",
        tie: false,
      };
    case O_WINS:
      return {
        win: "O",
        tie: false,
      };
    case TIE:
      return {
        win: null,
        tie: true,
      };

    default:
      return state;
  }
};

export const selectResult = (state) => state.result;
