import { combineReducers } from "redux";
import { boardReducer } from "./boardReducer";
import { playerReducer } from "./playerReducer";
import { resultReducer } from "./resultReducers";

export default combineReducers({
  board: boardReducer,
  players: playerReducer,
  result: resultReducer,
});
