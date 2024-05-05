import { render, screen } from '@testing-library/react';
import { Login } from './Login';

test('check if header is visible', () => {
    render(<Login />);
    const h1 = screen.findAllByText('Login form')
    expect(h1).toBeTruthy();
  });