import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('check if header is visible', () => {
  render(<Home />);
  const h1 = screen.findAllByText('Homepage')
  expect(h1).toBeTruthy();
});
