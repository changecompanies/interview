import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders a list of products', () => {
  render(<App />);
  const listElement = screen.getByText('Brochure on Cooking');
  expect(listElement).toBeInTheDocument();
});

test('Renders a product select element', () => {
  render(<App />);
  const listElement = screen.getByText('Select A Product');
  expect(listElement).toBeInTheDocument();
});
