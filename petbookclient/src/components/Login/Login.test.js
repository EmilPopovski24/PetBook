import { render, screen } from '@testing-library/react';
import { Login } from './Login';

test('check if header is visible', () => {
    render(<Login />);
    const { pic }  = screen.findByAltText("Avatar")
    expect(pic).toBeTruthy();
  });