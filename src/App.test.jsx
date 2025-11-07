import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders company description', () => {
  render(<App />);
  const descriptionElement = screen.getByText(/We are a small, nimble consulting firm/i);
  expect(descriptionElement).toBeInTheDocument();
});
