import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const h1 = screen.getAllByText("Homepage");
  expect(h1).toBeInTheDocument();
});
