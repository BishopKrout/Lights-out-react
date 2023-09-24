import React from "react";
import "./Cell.css";
import { render } from '@testing-library/react';


/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/


function Cell({ flipCellsAroundMe, isLit }) {
  const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
  return <td data-testid="cell" className={classes} onClick={flipCellsAroundMe} />;
}

export default Cell;
