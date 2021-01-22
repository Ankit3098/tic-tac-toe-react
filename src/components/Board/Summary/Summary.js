import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkResult } from "../../../store/actions/resultAction";
import { selectBoard } from "../../../store/reducers/boardReducer";
import { selectPlayers } from "../../../store/reducers/playerReducer";
import { selectResult } from "../../../store/reducers/resultReducers";

const Summary = () => {
  const players = useSelector(selectPlayers);
  const result = useSelector(selectResult);
  const board = useSelector(selectBoard);
  const dispatch = useDispatch();

  if (!(result.tie || result.win)) {
    dispatch(checkResult(board));
  }
  if (result.tie) {
    return <div className="alert alert-info mt-2">It's a Draw :(</div>;
  } else if (result.win === "X") {
    const player = players.p1 === "X" ? "Player 1" : "Player 2";
    return <div className="alert alert-success mt-2">{player} Wins!</div>;
  } else if (result.win === "O") {
    const player = players.p1 === "O" ? "Player 1" : "Player 2";
    return <div className="alert alert-success mt-2">{player} Wins!</div>;
  }

  return (
    <div className="mt-2">
      <div className="col">
        <p>
          <strong>Current Turn</strong>:
          {players.turn === "p1" ? (
            <span>Player 1</span>
          ) : (
            <span>Player 2</span>
          )}
        </p>
        <p>
          <strong>Player 1</strong>: {players.p1}
        </p>
        <p>
          <strong>Player 2</strong>: {players.p2}
        </p>
      </div>
    </div>
  );
};

export default Summary;
