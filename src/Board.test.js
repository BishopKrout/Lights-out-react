import { render, screen } from "@testing-library/react";
import Board from "./Board";

test('Board component renders without crashing', () => {
  render(<Board />);
});

test('hasWon function should return true when all cells are off', () => {
    render(<Board nrows={3} ncols={3} chanceLightStartsOn={0} />);
    expect(screen.getByText('You Won!')).toBeInTheDocument();
  });
  
  test('hasWon function should return false when any cell is on', () => {
    render(<Board nrows={3} ncols={3} chanceLightStartsOn={1} />);
    expect(screen.queryByText('You Won!')).not.toBeInTheDocument();
  });
  
