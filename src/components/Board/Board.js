import React from "react";
import { useSelector } from "react-redux";
import { selectBoard } from "../../store/reducers/boardReducer";
import Square from "./Square/Square";
import Summary from "./Summary/Summary";

const Board = () => {
  const board = useSelector(selectBoard);

  console.log(board);
  return (
    <>
      <div className="mt-4 d-flex flex-wrap board">
        {board.map((el, i) => (
          <Square key={i} symbol={el} index={i} />
        ))}
      </div>
      <Summary />
    </>
  );
};

export default Board;
