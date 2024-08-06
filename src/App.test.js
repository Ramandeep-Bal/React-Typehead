import { render, screen } from '@testing-library/react';
import App from './App';

test('Rendering of Search component inside App Component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Blur/i);
  expect(linkElement).toBeInTheDocument();
});
