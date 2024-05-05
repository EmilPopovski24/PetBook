import { render, screen } from '@testing-library/react';
import App from './App';
import Home from '../src/components/Home/Home';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


