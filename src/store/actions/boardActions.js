import { DRAW_X, DRAW_O } from "../actionTypes/actionTypes";

export const drawXAction = (cellIndex) => {
  return {
    type: DRAW_X,
    cellIndex,
  };
};

export const drawYAction = (cellIndex) => {
  return {
    type: DRAW_O,
    cellIndex,
  };
};
