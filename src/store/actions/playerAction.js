import { PLAYER_O, PLAYER_X, TURN } from "../actionTypes/actionTypes";

export const selectPlayerXAction = (player) => {
  return {
    type: PLAYER_X,
    player,
  };
};

export const selectPlayerOAction = (player) => {
  return {
    type: PLAYER_O,
    player,
  };
};

export const toggleTurnAction = () => {
  return {
    type: TURN,
  };
};
