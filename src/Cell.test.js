import { render, fireEvent } from "@testing-library/react";
import Cell from "./Cell";

test('Cell component receives props and handles onClick', () => {
  const flipCellsAroundMe = jest.fn();
  const { getByTestId } = render(<Cell isLit={true} flipCellsAroundMe={flipCellsAroundMe} />);
  
  fireEvent.click(getByTestId('cell'));
  expect(flipCellsAroundMe).toHaveBeenCalledTimes(1);
});
