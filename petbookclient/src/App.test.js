import { render, screen } from '@testing-library/react';
import App from './App';
import Home from '../src/components/Home/Home';
import { Header } from './components/Header/Header';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Test App component", () => {
  it("renders home page with picture", () => {
    const { logo } = render(<Header />)
    const headerlogo = screen.getbyText(/PetBook/i);
    expect(headerlogo).toVeTruthy();
  });
})
