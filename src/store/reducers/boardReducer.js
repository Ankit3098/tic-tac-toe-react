import { DRAW_X, DRAW_O } from "../actionTypes/actionTypes";

const initialState = [null, null, null, null, null, null, null, null, null];

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAW_X:
      let newXState = [...state];
      newXState[action.cellIndex] = "X";
      return newXState;
    case DRAW_O:
      let newOState = [...state];
      newOState[action.cellIndex] = "O";
      return newOState;

    default:
      return state;
  }
};

export const selectBoard = (state) => state.board;
