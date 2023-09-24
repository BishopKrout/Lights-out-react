import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the game board', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Lights Out/i);
  expect(linkElement).toBeInTheDocument();
});
