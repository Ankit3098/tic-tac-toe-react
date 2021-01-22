import React from "react";
import Zero from "./Zero/Zero";
import Cross from "./Cross/Cross";
import { useDispatch, useSelector } from "react-redux";
import { drawXAction, drawYAction } from "../../../store/actions/boardActions";
import { selectPlayers } from "../../../store/reducers/playerReducer";
import { toggleTurnAction } from "../../../store/actions/playerAction";
import { selectBoard } from "../../../store/reducers/boardReducer";

const Square = ({ symbol, index }) => {
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);
  const players = useSelector(selectPlayers);

  const disabled = symbol ? "disabled" : "";

  const draw = (player, index, board) => {
    if (!board[index]) {
      if (player[player.turn] === "X") {
        dispatch(drawXAction(index));
      } else {
        dispatch(drawYAction(index));
      }

      dispatch(toggleTurnAction());
    }
  };

  return (
    <div
      className={"cell " + disabled}
      onClick={() => draw(players, index, board)}
    >
      {symbol ? symbol === "X" ? <Cross /> : <Zero /> : ""}
    </div>
  );
};

export default Square;
