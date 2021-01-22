import { X_WINS, O_WINS, TIE } from "../actionTypes/actionTypes";
import { checkVictory } from "../../utils/checkVictory";

export const checkResult = (board) => {
  if (checkVictory(board, "X")) {
    return {
      type: X_WINS,
    };
  } else if (checkVictory(board, "O")) {
    return {
      type: O_WINS,
    };
  } else {
    const check = board.filter((symboal) => symboal === null);
    if (check.length === 0) {
      return {
        type: TIE,
      };
    } else {
      return {
        type: "RANDOM",
      };
    }
  }
};
