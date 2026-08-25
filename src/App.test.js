import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the LearnSphere portal shell', () => {
  render(<App />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getAllByText('LearnSphere').length).toBeGreaterThan(0);
});
